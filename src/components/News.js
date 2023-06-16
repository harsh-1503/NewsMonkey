import React, { Component } from "react";
import NewsComponent from "./NewsComponent";
import PropTypes from "prop-types";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [""];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      // totalResults:
      // totalResults: this.totalResults
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=efd846fbea4945b0860d6eabfd75c992&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    console.log(parsedData.totalResults);
    // console.log(parsedData);
  }
  handleNextBtn = async () => {
    // console.log('harsh');
    await this.setState({ page: this.state.page + 1, loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=efd846fbea4945b0860d6eabfd75c992&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  handlePrevBtn = async () => {
    // this.setState({page: this.state.page + 1})
    // console.log('karwa');
    console.log("harsh");
    await this.setState({ page: this.state.page - 1, loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=efd846fbea4945b0860d6eabfd75c992&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  };
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="text-center my-2">News Monkey-Top HeadLines</h2>
          {this.state.loading && (
            <div class="d-flex justify-content-center text-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          <div className="row news-items">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-3 mx-1">
                    <NewsComponent
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageURL={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                      }
                      newsURL={element.url}
                      author={!element.author?"Unknown":element.author}
                      time={new Date (element.publishedAt).toGMTString()}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevBtn}
          >
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextBtn}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
