import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

import "./Detail.css";

let 박스 = styled.div`
  padding: 20px;
`;
let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

function Detail(props) {
  let [inputData, inputData변경] = useState(" ");
  let [alert, alert변경] = useState(true);
  useEffect(() => {
    //2초후에 alert창 안보이게 해주셈ㅎ
    let timmer = setTimeout(() => {
      alert변경(false);
    }, 2000);
    return () => {
      clearTimeout(timmer);
    }; // 2초 되기 전에 사용자가 뒤로가기 누를 경우 겉으로 봤을때는 문제가 없지만 추후 문제 발생 가능성 있음
    // 타이머 해제
  }, [alert]); // alert라는 state가 변경될 때만 실행 만약 [] 대괄호 속을 공칸으로 둘 시 <Detail>등장시 한번만 실행한다.
  let { id } = useParams();
  // {사용자가 입력한 URL 파라피터들 : /:id자리에 사용자가 입력한 값 }
  let 찾은상품 = props.acc.find(function (상품) {
    // props로 전달받은 데이터를 find 함수를 사용해서 array안에 자료 찾음
    //콜백함수 내의 파라미터는 (상품) array 안에 있던 하나하나의 데이터를 의미
    return 상품.id == id;
  });
  let history = useHistory();
  // 방문 기록을 저장해두는 object
  // 사용 순서 (1. useHistory 라는 훅 import  2.useHistory() 훅 사용 )
  return (
    <>
      <div className="container container-box ">
        <박스>
          <제목 색상={"red"}>Detail</제목>
          <제목 색상="blue">Detail</제목>
          <제목 className="red">Detail</제목>
        </박스>
        <input
          onChange={(e) => {
            inputData변경(e.target.value);
          }}
        ></input>
        {inputData}
        <div className="row">
          <div className="col-md-6 content-im">
            <img src={찾은상품.imgUrl} width="100%" />
          </div>
          <div className="col-md-6 mt-4 container-box-detail-warp">
            <div className="container-box-detail">
              <h4 className="pt-5 ">{찾은상품.title}</h4>
              <p>{찾은상품.content}</p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea{" "}
              </p>
              <p className="price">{찾은상품.price}</p>
              <Info 재고={props.재고} 찾은상품={찾은상품}></Info>
              {alert === true ? (
                <div className="alert alert-warning my-alert2" role="alert">
                  상품의 갯수가 얼마 남지 않았습니다.
                </div>
              ) : null}
              <button
                className="btn btn-danger"
                onClick={() => {
                  props.재고변경([22, 33, 45, 66, 7]);
                }}
              >
                Buy
              </button>
              <button className="btn btn-danger">Cart</button>
              <button
                className="btn btn-dark"
                onClick={() => {
                  history.goBack();
                }}
              >
                Back
              </button>
              <button
                className="btn btn-dark"
                onClick={() => {
                  history.push("/");
                }}
              >
                Back2
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

class Detail2 extends React.Component {
  componentDidMount() {
    // Detail2 컴포넌트가 Mount (등장)되었을 때 실행할 코드~
  }
  componentWillUnmount() {
    // Detail2 컴포넌트가 UnMount (퇴장) 직전에  실행할 코드~
  }
}

function Info(props) {
  return <p>stock:{props.재고[props.찾은상품.id]}</p>;
}
export default Detail;
