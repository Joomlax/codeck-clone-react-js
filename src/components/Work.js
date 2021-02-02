import React, { Component } from "react";
import "../Assets/css/Work.css";
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
      <div className="row work">
        <div className="col-6 work-desc">{this.state.title}</div>
        <div className="col-6 work-image">
          <img src={this.state.image} />
        </div>
      </div>
    );
  }
}

export default Work;
