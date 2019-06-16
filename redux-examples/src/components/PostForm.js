import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";
import axios from "axios";

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              onChange={this.onChange}
              type-="text"
              name="title"
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea
              onChange={this.onChange}
              name="body"
              type-="text"
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
