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
      <div className="search-bar">
        <input
          value={this.state.term}
          // onChange={(event) => this.setState({term: event.target.value})}  />
          onChange={event => this.onInputChange(event.target.value)}  />
      </div>
    );

  }

  // on OR handle + [element] + [event type]
  onInputChange(term) {
    // DO NOT THIS (BAD) : this.state.terms = value;
    this.setState({term});

    // 상위 컴포넌트에서 전달 받은 함수 사용.
    this.props.onSearchVideo(term);

    // 내가 생각한 방식 : 상위 컴포넌트의 스테이트를 변경하여 조회 되도록 하는 방식(비효율)
    // this.props.onChangeTerm(term);

  }
}

// 2. export component
export default SearchBar;
