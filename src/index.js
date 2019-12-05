import React, {Component} from 'react'; // core lib
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAZ-UXObAx8ITwneu843yYf86qCjbV_EJw';

const App = () => {
  return <div>hello youtube.</div>
};

//   2. Take this component's generated HTML and put it on the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
