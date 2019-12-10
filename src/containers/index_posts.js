import React, { Component } from "react";
import { connect } from "react-redux";

class IndexPosts extends Component {

  componentDidMount() {
    // console.log('componentDidMount');

  }

  renderPosts() {
    console.log(this.props.postsList);
  }

  render() {
    return (
      <div>
        <h3>Index</h3>
        {this.renderPosts()}
      </div>);
  }
}

function mapStateToProps(state) {
  return {
    postsList: state.posts.postsList,
  }
}

export default connect(mapStateToProps, null)(IndexPosts);
