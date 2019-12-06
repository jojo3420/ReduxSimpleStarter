import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from './components/app';
import reducers from "./reducers";


// const App = () => {
//   return (
//     <div>
//       <h2>hello React</h2>
//     </div>
//   );
// };

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector(".container")
);
