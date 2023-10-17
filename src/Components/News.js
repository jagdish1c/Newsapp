import React, { Component } from 'react'
import PropTypes from 'prop-types';
import NewsItems from './NewsItems'
import Spinner from './Spinner';

export class News extends Component {
  static default = {
    country: "us",
    pageSize: 12,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  articles = []
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      page: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=914811e1ab5844f88abef41e114c1f66`
    let data = await fetch(url)
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalReasult: parseData.totalReasult
    })
  }
  handleprv = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=914811e1ab5844f88abef41e114c1f66&page=${this.state.page - 1}&pageSize=12`
    this.setState({ Spinner: true })
    let data = await fetch(url)
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      Spinner: false
    })
  }

  
  handlenext = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalReasult / 12)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=914811e1ab5844f88abef41e114c1f66&page=${this.state.page + 1}&pageSize=12`
      this.setState({ Spinner: true })
      let data = await fetch(url)
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        Spinner: false

      })
    }
  }
  render() {
    return (
      <div>
        <h2 className='container text-light' id='headline'>Headlines</h2>
        {this.state.Spinner && <Spinner />}
        <div className='container '>
          <div className='row'>
            {!this.state.Spinner && this.state.articles.map((Element) => {
              return <div className='col-md-4' key={Element.url}>
                <NewsItems tittle={Element.title ? Element.title.slice(0, 40) : ""} description={Element.description ? Element.description.slice(0, 60) : ""} imgUrl={Element.urlToImage ? Element.urlToImage : "https://tse3.mm.bing.net/th?id=OIP.iqiTarG6xoEVPavMLKjF_wHaHa&pid=Api&P=0"} newsUrl={Element.url} />
              </div>
            })}
          </div>
          <div className="d-flex justify-content-between my-4">
            <button type="button" className="btn btn-secondary " disabled={this.state.page <= 1} onClick={this.handleprv}>&larr; Previous</button>
            <button type="button" className="btn btn-secondary " disabled={this.state.page >= 1 > Math.ceil(this.state.totalReasult / 12)} onClick={this.handlenext}>Next &rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default News