/* eslint-disable*/
// eslint-disable 노란색으로 잡아주는 문법적 오류들을 안보이게 함
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
  /* 변수 안쓰고 state를 사용하는 이유는 웹이 app처럼 동작하게 된다. 새로고침 없이 state변경 시 html이 재렌더링 된다.  
   로고 같은 경우는 자주 변경이 안되기 때문에 하드코딩할 필요 없다. 
   */

  let [글제목, 글제목변경] = useState([
    "남자 코트 추천 ",
    "강남 우동 맛집",
    "디에디트 추천",
  ]);

  function 제목바꾸기() {
    let newArray = [...글제목]; //  값을 공유하는것이 아닌 독립적인 값을 갖기 위해 별개의 복사본을 만들것
    newArray[0] = "여자 코트 추천"; // 복사한 array에서 수정할것 리액트 대원칙 immutable data state직접 수정 하지 말것
    글제목변경(newArray);
  }

  function 글제목순서변경() {
    let newTitleArray = [...글제목];
    newTitleArray.sort();
    글제목변경(newTitleArray);
  }
  let [따봉, 따봉변경] = useState(0);
  let [날짜, 날짜변경] = useState([
    "2021년 2월 17일",
    "2021년 2월 16일",
    "2021년 2월 14일",
  ]);
  let [modal, modal변경] = useState(false);

  // let 어레이 = [1, 2, 3];
  // let 뉴어레이 = 어레이.map(function (a) {
  //   return a * a;
  // });
  // console.log(뉴어레이);
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
          <h3>
            {글제목[0]}{" "}
            <span
              onClick={() => {
                따봉변경(따봉 + 1);
              }}
            >
              👍
            </span>
            {따봉}
          </h3>
          <p>{날짜[0]}</p>
          <hr />
        </div>
        <div className="list">
          <h3>
            {글제목[1]} <span>👍</span>3
          </h3>
          <p>{날짜[1]}</p>
          <hr />
        </div>
        <div className="list">
          <h3
            onClick={() => {
              modal변경(true);
            }}
          >
            {글제목[2]} <span>👍</span>3
          </h3>
          <p>{날짜[2]}</p>
          <hr />
        </div>
        {글제목.map(function () {
          return (
            <div className="list">
              <h3>
                {글제목[0]}{" "}
                <span
                  onClick={() => {
                    따봉변경(따봉 + 1);
                  }}
                >
                  👍
                </span>
                {따봉}
              </h3>
              <p>{날짜[0]}</p>
              <hr />
            </div>
          );
        })}

        <button onClick={제목바꾸기}>변경</button>
        <button onClick={글제목순서변경}>제목 순서 변경</button>
        <button
          onClick={() => {
            modal변경(!modal);
          }}
        >
          내용보기
        </button>
        {modal === true ? <Modal></Modal> : null}
        {/*modal이 true일 경우만 modal을 띄워줍니다.*/}
      </div>
    </div>
  );
}

function Modal() {
  return (
    <>
      {/*return 안에는 여러개의 태그 불가 큰 div 하나안에 다 넣어야함  ++ div대용으로 <></>사용가능  */}
      <div className="modal">
        <div className="modal-title">
          <h2>ㅇㅇㅇㅇ</h2>
        </div>
        <div className="modal-contents">
          <p>날짜</p>
          <p>내용</p>
        </div>
      </div>
    </>
  );
}
export default App;
