import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
// import Table:export default 된거 가져오기
// import {Table}:Tavle이라는 함수/변수 가져오기
function Cart(props) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>EA</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((item, i) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quan}</td>
                <td>@MOd</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
function state를props화(state) {
  return {
    state: state,
  };
}

//export default Cart;
export default connect(state를props화)(Cart);
