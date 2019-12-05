import React from 'react'; // core lib
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


// @TODO: hide value
const API_KEY = 'AIzaSyDZMt0_mIz72EcUmCH5dc116mp9qRty7MI';

//    1. Create a new component. this component should produce some html
const App = () => {
  // return <div>Hello!</div>; // return JSX
  // 웹팩+바벨 같은 보일러플레이트 패키지의 목적은 JSX 코드를 바닐라 자바스크립트 코드로 변환해준다.
  // 이 바닐라 자바스크립트 코드는 궁극적으로 HTML 코드로 변환된다.
  // https://babeljs.io/repl 확인
  // <div>hello world</div> ==> React.createElement("div", null, "hello world");
  return (
    <div>
      <SearchBar/>
    </div>
  )
};


//   2. Take this component's generated HTML and put it on the DOM
// React.render(App);
// HTML DOM 과 상호작용 패키기지 React-dom 임.

// ReactDOM.render(App); // 인스턴스화 되지 않는 클래스 전달 하여 에러발생
// bundle.js:457 Uncaught Invariant Violation: Target container is not a DOM element.


// App : class 즉 ReactElement, <App /> : App 의Instance 즉 jsx 가 클래스를 리턴한다!!
ReactDOM.render(<App />, document.querySelector('.container'));
React.createElement('div', null, 'hi');
