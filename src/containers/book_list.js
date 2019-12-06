import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBookActionCreator } from '../actions/index';


class BookList extends Component {

  render() {
    const { books } = this.props;
    console.log('books:', books);
    if (!books) return <div>there is no books</div>;

    const bookItems = books.map((book) => {
      return (
        <li key={book.title} onClick={() => this.props.onSelectBook(book)}>
          <p>title: {book.title}, pages: {book.pages}</p>
        </li>
      );
    });

    return (
      <ul>
        {bookItems}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onSelectBook: selectBookActionCreator,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
