import React, { Component } from 'react';
// connect redux state & react
import { connect } from 'react-redux';
// Bind ActionCreators
import { bindActionCreators } from 'redux';
// Action Create function
import { selectBookActionCreator } from '../actions';


class BookList extends Component {

  render() {
    return (
     <ul className='list-group col-sm-4'>
       {this.bookItems()}
     </ul>
    )
  }

  bookItems() {
    const { books } = this.props;
    console.log('books:', books);
    if (!books) return <div>books is empty..</div>;
    return books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
        >{book.title}, {book.pages}</li>

      )
    });
  }

}

function mapStateToProps(state) {
  console.log('state:', state);
  return {
    books: state.books,
  }
}
function mapDispatchToProps(dispatch) {
   return bindActionCreators({
     selectBook: selectBookActionCreator
   }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);



