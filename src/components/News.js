import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

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
    constructor(){
        super();
        // console.log('Hello I am a constructor');
        this.state = {
            articles : this.articles,
            loading : false,
            page : 1
        }
      }
      //runs after render is completed
      async componentDidMount(){
        console.log('component did mount');
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=48dc11e92a8c4b43b926611cebcce404&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading:false
        });
      }
       handleNextClick = async () =>{
            //change state update pages
        // if(!this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=48dc11e92a8c4b43b926611cebcce404&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data = await fetch(url);
            // this.setState({loading:false})
            let parsedData = await data.json();
            this.setState({articles: parsedData.articles});
                this.setState({
                    page: this.state.page+1,
                    articles: parsedData.articles,
                    loading: false
                })
        // }
      }
      handlePrevClick = async () => {
        //change state and page no. of url
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=48dc11e92a8c4b43b926611cebcce404&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles});
            this.setState({
                page: this.state.page-1,
                articles: parsedData.articles,
                loading:false
            })
      }
  render() {
    return (
      <div className='container my-3'>
            <h1 className="text-center" style = {{margin: '35px 0px '}}>
                News Headlines
            </h1>
            {this.state.loading && <Spinner />}
            <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
                return <div className="col-md-4" key = {element.url}>
                <NewsItem  title = {element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,87):""} imageUrl = {element.urlToImage}
                    newsUrl = {element.url}/>
                </div>

            })}
                
            </div>
            <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr;  Prev</button>
            <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
      </div>
    )
  }
}

export default News
