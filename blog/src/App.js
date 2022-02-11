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

  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [날짜, 날짜변경] = useState([Date(), Date(), Date()]);

  let [누른제목번호, 누른제목번호변경] = useState(0);

  let [글추가입력, 글추가입력변경] = useState("");

  let [modal, modal변경] = useState(false);

  function 따봉개별(i) {
    let 따봉복사 = [...따봉];
    따봉복사[i]++;
    따봉변경(따봉복사);
  }

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

  function 글저장() {
    let 새로운글목록 = [...글제목];
    새로운글목록.unshift(글추가입력);
    글제목변경(새로운글목록);
    let 새로운날짜 = [...날짜];
    새로운날짜.unshift(Date());
    날짜변경(새로운날짜);
    따봉.unshift(0);
  }
  // let 어레이 = [1, 2, 3];
  // let 뉴어레이 = 어레이.map(function (a) {
  //   return a * a;
  // });
  // console.log(뉴어레이);

  // function 반복된UI() {
  //   let uiArray = [];
  //   for (let i = 0; i < 3; i++) {
  //     uiArray.push(<div>안녕</div>);
  //   }
  //   return uiArray;
  // }

  return (
    <div className="App">
      <div className="nav">
        <img className="nav-logo" src={logo} />
        <div style={{ color: "rgb(27, 27, 27)", fontSize: "20px" }}>
          React blog
        </div>
      </div>
      <div className="section">
        {글제목.map(function (글, i) {
          // 글: 글제목 array안에 들어있던 하나하나의 데이터
          return (
            <div className="list" key={i}>
              <h3
                onClick={() => {
                  누른제목번호변경(i);
                }}
              >
                {글}
                <span
                  onClick={() => {
                    따봉개별(i);
                  }}
                >
                  👍
                </span>
                {따봉[i]}
              </h3>
              <p>{날짜[i]}</p>
              <hr />
            </div>
          );
        })}

        <div className="buttons">
          <div className="change_buttons">
            <button onClick={제목바꾸기}>변경</button>
            <button onClick={글제목순서변경}>제목 순서 변경</button>
            <button
              onClick={() => {
                modal변경(!modal);
              }}
            >
              내용보기
            </button>
            {/* <input
              onChange={(e) => {
                입력값변경(e.target.value);
              }}
            ></input>
            {입력값} */}
            {/* <button
              onClick={() => {
                누른제목번호변경(0);
              }}
            >
              버튼1
            </button>
            <button
              onClick={() => {
                누른제목번호변경(1);
              }}
            >
              버튼2
            </button>
            <button
              onClick={() => {
                누른제목번호변경(2);
              }}
            >
              버튼3
            </button> */}
          </div>
          <div className="publish">
            <input
              onChange={(e) => {
                글추가입력변경(e.target.value);
              }}
            ></input>
            <button
              onClick={() => {
                console.log(글제목);
                글저장();
              }}
            >
              저장
            </button>
          </div>
        </div>
        <Profile></Profile>
        {modal === true ? (
          <Modal
            글제목={글제목}
            누른제목번호={누른제목번호}
            날짜={날짜}
          ></Modal>
        ) : null}
        {/*modal이 true일 경우만 modal을 띄워줍니다.*/}
        {/* {반복된UI()} */}
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <>
      {/*return 안에는 여러개의 태그 불가 큰 div 하나안에 다 넣어야함  ++ div대용으로 <></>사용가능  
      props를 사용해서 부모 컴포넌트에서 state를 넘겨받는다.
      1. 부모 컴포넌트 안에서 자식 컴포넌트  작명 = 전송할 state 이름 
      <Modal 글제목={변수명}>말고 Modal 글제목="강남우동맛집"> 일반 텍스트 전송도 가능함 
      2. 자식 컴포넌트 안에서 props 파라미터 입력 후 사용 (props) 일종의 큰 변수
      (props는 아무 이름으로 해도 괜찮으나 관습적으로 props 사용)
      */}
      <div className="modal">
        <div className="modal-title">
          <h2>{props.글제목[props.누른제목번호]}</h2>
        </div>
        <div className="modal-contents">
          <p>{props.날짜[props.누른제목번호]}</p>
          <p> 상세 내용</p>
        </div>
      </div>
    </>
  );
}
// 컴포넌트 만드는 두번째 방법 class
class Profile extends React.Component {
  constructor() {
    super();
    // state는 constructor안에 작성
    this.state = { name: "Kim", age: 30 };
  }

  changeName() {
    this.setState({ name: "Park" });
  }
  render() {
    return (
      <div>
        <h3>Profile</h3>
        <p>저는 {this.state.name}입니다.</p>
        {/* State 사용시 this.state.꺼낼데이터 */}
        <button onClick={this.changeName.bind(this)}>이름변경</button>
        {/* 버튼 클릭 이름 변경 함수 
         [원래값, 변경할래]=useState 변경할래 같이 사용하는 함수 setState() 
        대신 useState는 아예 대체해버리고 setState는 넘겨준 값만 {name: "Park"}변경한다*/}
      </div>
    );
  }
}
export default App;
