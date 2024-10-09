import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

import reducers from "./reducers";

import App from "./App";


import { ThemeProvider, createTheme } from "@mui/material/styles"; // ThemeProvider와 createTheme 가져오기

// Redux 스토어 생성
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// MUI 테마 생성 (spacing 단위 설정)
const theme = createTheme({
  spacing: 8, // spacing 단위를 설정 (기본값은 8px)
});

// React 18 방식으로 렌더링
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
</Provider>
);
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
