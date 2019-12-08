import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {

  render() {
    const { book } = this.props;

    if (!book) return <div>let select book</div>;

    return (
      <div>
        <div>Title: {book.title}</div>
        <div>Pages: {book.pages}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.selectBook,
  }
}


export default connect(mapStateToProps)(BookDetail);

