import React, { Component } from 'react'

export class NewsItems extends Component {

  render() {
    let { tittle, description, imgUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card mt-3">
          <img src={imgUrl} className="card-img-top" alt="image not available" />
          <div className="card-body">
            <h5 className="card-title">{tittle}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-secondary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems