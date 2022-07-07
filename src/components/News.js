import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className='container my-3'>
            <h2>News - Top Headlines</h2>
            <div className="row">
                <div className="col-md-4">
                <NewsItem title = {'myTitle'} description = {'whatever'}/>
                </div>
                <div className="col-md-4">
                <NewsItem title = {'myTitle'} description = {'whatever'}/>
                </div>
                <div className="col-md-4">
                <NewsItem title = {'myTitle'} description = {'whatever'}/>
                </div>
            </div>

      </div>
    )
  }
}

export default News
