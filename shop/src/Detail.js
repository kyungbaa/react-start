import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Detail(props) {
  let history = useHistory();
  // 방문 기록을 저장해두는 object
  // 사용 순서 (1. useHistory 라는 훅 import  2.useHistory() 훅 사용 )
  return (
    <>
      <div className="container container-box ">
        <div className="row ">
          <div className="col-md-6">
            <img src={props.acc[0].imgUrl} width="100%" />
          </div>
          <div className="col-md-6 mt-4 container-box-detail-warp">
            <div className="container-box-detail">
              <h4 className="pt-5 ">{props.acc[0].title}</h4>
              <p>{props.acc[0].content}</p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea{" "}
              </p>
              <p className="price">{props.acc[0].price}</p>
              <button className="btn btn-danger">Buy</button>
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
                  history.push("/dddddd");
                }}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Detail;
