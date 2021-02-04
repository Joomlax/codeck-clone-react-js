import React, { Component } from "react";
import "../../Assets/css/Work.css";
import "bootstrap/dist/css/bootstrap.min.css";

export class Work extends Component {
  state = {
    title: "",
    category: "",
    description: "",
    website: "",
    gallery: "",
    image: "",
  };

  componentDidMount() {
    this.setState({
      title: this.props.title,
      category: this.props.category,
      description: this.props.description,
      website: this.props.website,
      gallery: this.props.gallery,
      image: this.props.image,
    });
  }
  render() {
    return (
      <div className="work">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 work-desc align-items-center justify-content-center">
            <h2 className="work-title">{this.state.title}</h2>
            <h4 className="work-category">{this.state.category}</h4>
            <p className="work-description">{this.state.description}</p>
            <div className="work-links">
              <a href={this.state.gallery} className="work-gallery">
                GALERİ
              </a>
              <a href={this.state.website} className="work-website">
                WEBSİTESİ
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 work-image">
            <img src={this.state.image} />
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
