import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {

  render() {
    const { activeBook } =  this.props;
    if (!activeBook) return <div>Let's select a book</div>

    return (
      <div>
        <h3>Select Book</h3>
        <div>Title: {activeBook.title}</div>
        <div>Pages: {activeBook.pages}</div>
      </div>
    )
  }
}

function toStateToProps(state) {
  return {
    activeBook: state.activeBook
  }
}

export default connect(toStateToProps)(BookDetail);
