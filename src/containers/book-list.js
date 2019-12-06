import React, { Component } from 'react';
// react & redux 연결(접착)하기 위해 connect 함수 불러옴
import { connect } from 'react-redux';
// import action function(ActionCreators)
import { onSelectBook } from '../actions/index';
// import ActionCreators and container 컴바인
import { bindActionCreators } from 'redux';



/*
 컨테이너: 리액트에서 리덕스 스테이트를 직접 접근 하는 역할을 컨테이너라고 부른다.
 */

/* export default */ class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.onSelectBook(book)} // Call Action func
          className='list-group-item'>{book.title}</li>
      );
    });
  }

  render() {
    console.log('BookList.render()');
    const books = this.props.books;
    if (books && books.length < 1) return <div>sorry. no book list</div>;

    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

// 이 mapStateToProps() 함수를 통해 리덕스 & 리액트가 연결됨
// 리덕스 스테이트를 리액트 props 으로 변환 하여 주입 해줌!
function mapStateToProps(state) {
  console.log('BookList redux state:', state);
  // Whatever is returned will show up as props
  // inside of BookList

  // 클래스에서 this.props 객체로 접근함. ==> this.props.books
  return {
    books: state.books, // reducer_books "리듀서" 가 배열을 리턴함
  };
}

// Anything returned from this function will end up as props
// on the BookList container
// 액션 함수를 BookList(컨테이너) this.props 에게 전달하기 위해
// 액션 생성자와 컨테이너와 연결한다.
function mapDispatchToProps(dispatch) {
  // selectBook이 호출될 때마다, 결과는 모든 리듀서로 전달되어야 한다.
  return bindActionCreators({
    onSelectBook: onSelectBook // pojo action function
  }, dispatch);
}

// 단순 리액트 컴포넌트가 아니라 컨테이너를 만들어서 컨테이너를 수출 한다.
// 컨테이너는 connect 함수를 통해 만든다.
//
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

