import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {

  render() {
    console.log('BookDetail render()');
    const { book } = this.props;
    if (!book) return <div>Let's get a book</div>;

    return (
      <div>
        <p>Title: {book.title}</p>
        <p>Pages: {book.pages}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('BookDetail redux state: ', state);
  return {
    book: state.activeBook,
  };
}

// export container
export default connect(mapStateToProps)(BookDetail);
