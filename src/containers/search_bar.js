import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';



class SearchBar extends Component {
  constructor(props) {
    super(props);

    // term 은 컴포넌트 스테이트에 저장한다. Not App State
    this.state = {term: ''};

    // onInputChange() 메서드에 this를 바인딩 해준다.
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onInputChange(event) {
    // console.log(this);  // this is undefined
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    // get fetch weather data
    this.props.fetchWeather(this.state.term);

    // clear term
    this.state.term = '';
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='form-control'>
         <input className='form-control'
                value={this.state.term}
                onChange={this.onInputChange}
                // onChange={(event) => this.onInputChange(event)}
         />
         <span>
           <button type='submit'>Submit</button>
         </span>
      </form>
    );
  }
}
// onChange 이벤트 핸들렁 함수 "컨텍스트" 이슈
//  <input onChange={(event) => this.onInputChange(event)} />
// ES6 화살표 함수 로 작성시 this.onInputChange() 메서드 안의 this 는 SearchBar
// <input  onChange={this.onInputChange} />
// onInputChange() 메서드 안의 this 는 undefined ...
// 해결방법은 화살표 함수로 핸들러르 작성하거나.. 클래스 생성자에서 this를 바인딩 해준다.

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchWeather,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
