/* eslint-disable*/
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "오늘의 집",
    "29cm 구매 후기",
  ]);

  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false); // on, off
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

  function 반복UI() {
    let 어레이 = [];
    for (let i = 0; i < 3; i++) {
      어레이.push(<div>안녕</div>);
    }
    return 어레이;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {반복UI()}
      {/* map 함수'=
      반복할데이터.map(()=>{return<HTML>})
       */}
      {글제목.map(function (글) {
        return (
          <div className="list">
            <h4>
              {글}{" "}
              <span
                onClick={() => {
                  따봉변경(따봉 + 1);
                }}
              >
                👍
              </span>
              {따봉}
            </h4>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}

      <button onClick={제목바꾸기}>수정 </button>
      <button onClick={순서바꾸기}>타이틀 순 정렬</button>

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        {" "}
        열고닫는버튼{" "}
      </button>
      {modal === true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  // component 유의사항
  // 컴포넌트 만들 시 이름의 앞글자 대문자사용
  // return()안에 div여러개 동일선상에서 두개 이상 불가 (많이 만들고 싶다면 큰 div안에 넣을것)
  // 의미없는 큰 div를 만들기 싫을 경우 <></>를 사용한다.
  // html을 한단어로 사용해서 만들 수 있음 덩어리째 관리하여 관리가 편해짐
  /*
  - 컴포넌트 장점 
    반복적으로 출현하는 html들은 컴포넌트 만들기를 추천
    사이트내에서 자주 변경되는 html UI들
    다른 페이즐ㄹ 만들 때도 컴포넌트로 만듦 
   - 컴포넌트 단점
    state 쓸때 복잡함 
   */
  return (
    <>
      <div className="modal">
        <h4>제목 </h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}
export default App;
