// import React from 'react'; // JSX 변환을 위해 import 필요.
import React, { Component } from 'react'; // JSX 변환을 위해 import 필요.

// 1. Search_bar component (html) 만들기
// Function Base Component
// const SearchBar = () => {
//   return <input />
// };

// Class Base Component : just js plain class
// extend React.Component
class SearchBar extends Component {

  // state 초기화
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  // must have 재정의 필요: render()
  // state 가 변경되면 render() 함수가 호출되고 리렌더링 된다.
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={(event) => this.setState({term: event.target.value})}  />
      </div>
    );

    // return <input  onChange={this.onInputChange}  />; // return jsx
  }

  // on OR handle + [element] + [event type]
  // onInputChange(event) {
  //   const { value } = event.target;
  //   console.log(value);
  //   // DO NOT THIS (BAD) : this.state.terms = value;
  //   this.setState({term: value});
  // }
}

// 2. export component
export default SearchBar;
