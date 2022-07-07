import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
  render() {
    let {title,description} = this.props;
    return (
      <div>
            <div className="card" style={{width: "18rem"}}>
              <img src="https://cdn.24.co.za/files/Cms/General/d/3603/2fdeed0fd4e64364972096a0d565792c.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/newdetail" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
