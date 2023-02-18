import React, { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/app.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
    { id: 4, title: "Javascript 4", body: "Description" },
    { id: 5, title: "Javascript 5", body: "Description" },
  ]);

  const [title, setTitle] = useState("");
  const addNewPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form action="">
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        <MyInput type="text" placeholder="Описание поста" />
        <MyButton disabled onClick={addNewPost}>
          Создать пост
        </MyButton>
      </form>
      <PostList posts={posts} title="JS:" />
    </div>
  );
}

export default App;
