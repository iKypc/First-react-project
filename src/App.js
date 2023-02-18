import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/app.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
    { id: 4, title: "Javascript 4", body: "Description" },
    { id: 5, title: "Javascript 5", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="JS:" />
    </div>
  );
}

export default App;
