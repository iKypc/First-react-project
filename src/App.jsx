import React from "react";
import PostItem from "./components/PostItem";
import './styles/app.css';

function App() {
  return (
    <div className="App">

      <PostItem post={{id: 1, title: 'Javascript', body: 'Description'}} />
      
    </div>
  );
}

export default App;
