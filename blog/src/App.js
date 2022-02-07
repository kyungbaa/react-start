/* eslint-disable*/
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
let posts = "강남 고기 맛집";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "오늘의 집",
    "29cm 구매 후기",
  ]);

  let [좋아요, 좋아요변경] = useState(0);
  function 제목바꾸기() {
    글제목변경(["여자코트 추천", "오늘의 집", "29cm 구매 후기"]);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>수정 </button>
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              좋아요변경(좋아요 + 1);
            }}
          >
            👍
          </span>
          {좋아요}
        </h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
