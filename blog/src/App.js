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
    /* 
     reference date type 특징
    수정된 [데이터]를 만들때 state 복사본을 만들어서 수정할 것 
     let newArray = [...글제목]; > Deep copy   ...> 괄호 벗기기 ...[1,2,3] > 1,2,3
     리액트 대 원칙: immutable date
     -------------------------
    1. 수정하고 싶은 state의 deep/shallow 카피본을 하나 생성합니다. 
    2. 카피본을 입맛에 맞게 수정합니다. 
    3. 카피본을 state변경함수()에 집어넣습니다. 
     */
    let newArray = [...글제목];
    newArray[0] = "여자코트 추천";
    글제목변경(newArray);
  }

  function 순서바꾸기() {
    let newNameArray = [...글제목];
    newNameArray.sort(function (a, b) {
      if (newNameArray[a] < newNameArray[b]) {
        return 1;
      } else {
        return -1;
      }
    });
    글제목변경(newNameArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>수정 </button>
      <button onClick={순서바꾸기}>타이틀 순 정렬</button>
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
