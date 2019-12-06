import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {

  render() {
    return (
      <div>
        <p>book title</p>
      </div>
    )
  }
}

function toStateToProps(state) {
  return {
    // selectedBook: state.ac
  }
}

export default BookDetail;
