import React from "react";
import ReactDOM from "react-dom";
// import { createStore, applyMiddleware } from "redux";
// import ReduxPromise from 'redux-promise';
// import { Provider } from 'react-redux';
// import reducers from './reducers';
// import App from './components/app';
// browserHistory 는 히스토리 라이브러리로부터 분리 된 객체
//  URL 업데이트 될때 "감지" 한 후 라우터에게 "전달"
// hashHistory : URL 부분에서 해시(#) 이후의 모든 것들을 감지하며
import { Router, browserHistory, hashHistory } from 'react-router';
// 라우터 구성 가져오기
import routes from './routes';


// const createStoreWithMiddleware = applyMiddleware()(createStore);

/*
       1. 라우터 설정: 라우터 객체에 히스토리 객체 전달 : browserHistory, hashHistory...
       2. 라우터 구성 맵팡 전달 : routes.js

        <Router history={browserHistory} routes={routes} />

  <Provider store={createStore(reducers)}>

  </Provider>,

 */

const App = () => <div>App</div>;
ReactDOM.render(<App />, document.querySelector(".container"));
