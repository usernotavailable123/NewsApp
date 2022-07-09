import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    static defaultProps = {
        country:'in',
        pageSize : 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    articles = []
    constructor(props){
        super(props);
        // console.log('Hello I am a constructor');
        this.state = {
            articles : this.articles,
            loading : false,
            page : 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News`;
      }
    capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      //runs after render is completed
      async componentDidMount(){

        this.updateNews();
      }
       handleNextClick = async () =>{
            await this.setState({page:this.state.page + 1 });
            this.updateNews();
      }
      handlePrevClick = async () => {
        await this.setState({page:this.state.page - 1});
        this.updateNews();
      }
    async updateNews(){
        this.props.setProgress(10)
        console.log('page state',this.state);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=48dc11e92a8c4b43b926611cebcce404&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        this.props.setProgress(30)

        let parsedData = await data.json();
        this.props.setProgress(60)

        console.log('url',url)
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading:false,
        });
        this.props.setProgress(100);
    }
    fetchMoreData = async () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        await this.setState({page: this.state.page + 1});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=48dc11e92a8c4b43b926611cebcce404&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log('url',url)
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading:false,
        });
      };
  render() {
    return (
      <>
            <h1 className="text-center" style = {{margin: '35px 0px '}}>
                Recent {this.capitalizeFirstLetter(this.props.category)} News
            </h1>
            {this.state.loading && <Spinner />}
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!=this.state.totalResults}
          loader={<Spinner/>}>
            <div className="container">
                <div className="row">
                {this.state.articles.map((element) => {
                    return <div className="col-md-4" key = {element.url}>
                    <NewsItem  title = {element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,87):""} imageUrl = {element.urlToImage}
                        newsUrl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
                    </div>

                })}   
            </div> 
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr;  Prev</button>
            <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div> */}
      </>
    )
  }
}

export default News
