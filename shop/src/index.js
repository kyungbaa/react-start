import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

//HashRouter 라우팅을 안전하게 할 수 있음  > 서버에게 특정 페이지좀 보여달라는 요청할때 없는 페이지를 요청할경우 404 Page Not Found 에러가 뜨는데 실수로 요청하지 않기 위해 주소 뒤에 #을 띄워줌 브라우저에서 #뒤는 서버로 요청되지 않는다.
//BrowserRouter : 라우팅을 리액트가 아니라 서버에게 요청할 수 있어서 위험

import { Provider } from "react-redux";
import { createStore } from "redux";

let store = createStore(() => {
  return [
    { id: 0, name: "Black and Gold", quan: 2 },
    { id: 1, name: "Jewelry Yordan", quan: 1 },
    { id: 2, name: "Wilson Text", quan: 2 },
    { id: 3, name: "Grey Yordan", quan: 3 },
    { id: 4, name: "Delicate dreams", quan: 1 },
  ];
});
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
