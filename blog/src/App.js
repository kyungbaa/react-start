import React from "react";
import logo from "./logo.svg";
import "./App.css";
let posts = "강남 고기 맛집";

function App() {
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <div className="list">
        <h4>{posts}</h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
