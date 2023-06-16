import React, { Component } from "react";

export class NewsComponent extends Component {
  render() {
    let {title,description,imageURL,newsURL,author,time} = this.props;
    return (
      <>
      
      <div className="container my-3">
        <div className="card" >
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-muted">By: {author} at {time}</small></p>
            <a href={newsURL} target="_blank" className="btn btn-dark btn-sm">
              Read More
            </a>

          </div>
        </div>
      </div>
      </>
    );
  }
}

export default NewsComponent;
