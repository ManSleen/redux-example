import React, { Component } from "react";
import axios from "axios";

class Posts extends Component {
  state = {
    posts: []
  };

  componentWillMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(res => {
        this.setState({
          posts: res.data
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const postItems = this.state.posts.map(post => {
      return (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    });
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

export default Posts;
