/*eslint-disable*/
import React, { useContext, useState } from "react";
import "./App.css";
import "./index.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Data from "./data";
import Detail from "./Detail";
import axios from "axios";

import { Link, Route, Switch } from "react-router-dom";

export let 재고context = React.createContext(); // 같은 변수값을 공유할 범위 생성
function App() {
  let [acc, acc변경] = useState(Data);
  // data.js의 데이터 바인딩 (data.js import 후 사용)
  // 파일을 쪼갤 때 사용하는 import / export
  // 다른파일로 분류할 때 사용한다 어떤 특정한 파일을 다른 파일에서 사용하게 하고 싶을 때는 export default  변수명[]
  // export default는 파일 당 한번만 사용 가능하다
  // 여러개의 변수를 export 하려면 export {name, name2} >> 대신 import할때 따로 작명이 아니라 import {name, name2} from "./data"; 이렇게 갖고 와야함
  let [로딩중, 로딩중변경] = useState(false);
  let [재고, 재고변경] = useState([11, 12, 13, 13, 14, 1, 1, 1, 1]);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Statement Jewellery</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/detail">
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        {/*한번에 하나의 <Route>만 보여주고 싶다 그러면 <Route>들을 위에서 import 해온 <Switch> 태그로 감싸면 됩니다.*/}
        <Route exact path="/">
          <Topbanner></Topbanner>
          <div className="container">
            <재고context.Provider value={재고}>
              <div className="row">
                {/* props 전송법 
          1. <자식 컴포넌트 보낼이름쀼쀼 = {전송할 state}
          2. fuction 자식컴포넌트 (props){}
          3. props. 보낼이름쀼쀼 사용 */}
                {/* 나는 반복문을 자식 컴포넌트에서 생각했는데 아예 부모 컴포넌트에서 보낼때 각 해당번째 props를 보냄  */}

                {
                  acc.map((accItem, i) => {
                    // accItem > acc 안에 있는 하나하나의 데이타
                    return <Card acc={acc[i]} i={i} key={i}></Card>; // = <Card acc={accItem} key={i}></Card>;
                  })

                  /*acc.map(function (accItem, i) {
            return <Card acc={acc[i]}></Card>;
          })*/
                }
              </div>
            </재고context.Provider>
            <div className="loading-button">
              {로딩중 === true ? <LoaidngAlert></LoaidngAlert> : null}
              <button
                type="button"
                className="btn btn-dark more-button"
                onClick={() => {
                  로딩중변경(true);
                  /* 서버에 데이터를 보내고 싶을 떄 POST 요청하는 */
                  axios.post("서버URL", { id: "kyungbaa", pw: 1212345 });

                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((result) => {
                      로딩중변경(false);
                      console.log(result.data);
                      acc변경([...acc, ...result.data]);
                    })
                    .catch(() => {
                      로딩중변경(false);
                      console.log("실패했습니다.");
                    });
                }}
              >
                More
              </button>
            </div>
          </div>
        </Route>
        <Route path="/detail/:id">
          <재고context.Provider value={재고}>
            <Detail acc={acc} 재고={재고} 재고변경={재고변경}></Detail>
          </재고context.Provider>
        </Route>
        {/* <Route path="/어쩌고" component={Modal}></Route> 사이에 html이 아니라 component로 보여줄 수 있음*/}

        <Route path="/:id">
          <div> 아무거나 적었을때 이 문구를 보여줄거란다 </div>
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {
  let 재고 = useContext(재고context);
  return (
    <>
      <div className="col-md-4 ">
        <div className="container-contents">
          <img src={props.acc.imgUrl}></img>
          <div className="container-contents-text">
            <h5>{props.acc.title}</h5>
            <p>
              {props.acc.content} & {props.acc.price}
            </p>
            {/* stock:
            {재고[props.i]} */}
            <Test></Test>
          </div>
        </div>
      </div>
    </>
  );
}

function Test() {
  let 재고 = useContext(재고context);
  return (
    <>
      <p>stock :{재고[0]}</p>
    </>
  );
}
function Topbanner() {
  return (
    <>
      <div className="topbanner">
        <div className="topbanner-contents">
          <h1>Statement Jewellery</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea{" "}
          </p>
          <Button variant="dark">More</Button>{" "}
        </div>
      </div>
    </>
  );
}

function LoaidngAlert() {
  return (
    <>
      <div className="alert alert-warning my-alert2" role="alert">
        로딩중입니다.
      </div>
    </>
  );
}
export default App;
