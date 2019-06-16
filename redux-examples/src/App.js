import React from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PostForm />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
