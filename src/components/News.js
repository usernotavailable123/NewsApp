import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = []
    constructor(){
        super();
        // console.log('Hello I am a constructor');
        this.state = {
            articles : this.articles,
            loading : false
        }
      }
      //runs after render is completed
      async componentDidMount(){
        console.log('conponent did mount');
        let url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=48dc11e92a8c4b43b926611cebcce404';
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles});
      }
  render() {
    return (
      <div className='container my-3'>
            <h2>News - Top Headlines</h2>
            
            <div className="row">
            {this.state.articles.map((element) => {
                return <div className="col-md-4" key = {element.url}>
                <NewsItem  title = {element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,87):""} imageUrl = {element.urlToImage}
                    newsUrl = {element.url}/>
                </div>

            })}
                
            </div>

      </div>
    )
  }
}

export default News
