/* eslint-disable*/
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let posts = "강남 고기 맛집";

  function 함수() {
    return 100;
  }
  /* 
  ES6 destructuring 문법
 let [a,b] =[10,100];
 a안에는 10, b 안에는 100*/
  let [글제목, 글제목변경] = useState("남자코트 추천");

  return (
    <div className="App">
      <div className="nav">
        <img className="nav-logo" src={logo} />
        <div style={{ color: "rgb(27, 27, 27)", fontSize: "20px" }}>
          React blog
        </div>
      </div>
      <div className="section">
        <div className="list">
          <h4>{글제목}</h4>
          <p>날짜</p>
          <hr />
        </div>
        <div className="list">
          <h4>{글제목}</h4>
          <p>날짜</p>
          <hr />
        </div>
        <div className="list">
          <h4>{posts}</h4>
          <p>날짜</p>
          <hr />
        </div>
      </div>
    </div>
  );
}
export default App;
