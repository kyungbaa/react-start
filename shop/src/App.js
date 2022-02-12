/*eslint-disable*/
import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Data from "./data";
import Detail from "./Detail";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [acc, acc변경] = useState(Data);
  // data.js의 데이터 바인딩 (data.js import 후 사용)
  // 파일을 쪼갤 때 사용하는 import / export
  // 다른파일로 분류할 때 사용한다 어떤 특정한 파일을 다른 파일에서 사용하게 하고 싶을 때는 export default  변수명[]
  // export default는 파일 당 한번만 사용 가능하다
  // 여러개의 변수를 export 하려면 export {name, name2} >> 대신 import할때 따로 작명이 아니라 import {name, name2} from "./data"; 이렇게 갖고 와야함

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Statement Jewellery</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/detail">Detail</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        {/*한번에 하나의 <Route>만 보여주고 싶다 그러면 <Route>들을 위에서 import 해온 <Switch> 태그로 감싸면 됩니다.*/}
        <Route exact path="/">
          <Topbanner></Topbanner>
          <div className="container">
            <div className="row">
              {/* props 전송법 
          1. <자식 컴포넌트 보낼이름쀼쀼 = {전송할 state}
          2. fuction 자식컴포넌트 (props){}
          3. props. 보낼이름쀼쀼 사용 */}
              {/* 나는 반복문을 자식 컴포넌트에서 생각했는데 아예 부모 컴포넌트에서 보낼때 각 해당번째 props를 보냄  */}

              {
                acc.map((accItem, i) => {
                  // accItem > acc 안에 있는 하나하나의 데이타
                  return <Card acc={accItem} key={i}></Card>; // = <Card acc={acc[i]} key={i}></Card>;
                })
                /*acc.map(function (accItem, i) {
            return <Card acc={acc[i]}></Card>;
          })*/
              }
            </div>
          </div>
        </Route>
        <Route path="/detail/:id">
          <Detail acc={acc}></Detail>
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
  return (
    <>
      <div className="col-md-4 ">
        <div className="container-contents">
          <img src={props.acc.imgUrl}></img>
          <div className="container-contents-text">
            <h5>{props.acc.title}</h5>
            <p>
              {props.acc.content} & {props.acc.price}{" "}
            </p>
          </div>
        </div>
      </div>
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

export default App;
