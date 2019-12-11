import _ from 'lodash';
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPostsIndex } from "../actions/index";



class IndexPosts extends Component {
  componentDidMount() {
    // console.log('componentDidMount');
    this.props.fetchPostsIndex();
  }

  renderPosts() {
    const { postsList } = this.props;
    const posts = _.map(postsList, posts => {
      return (
        <tr>
          <td>${posts.title}</td>
          <td>${posts.categories}</td>
          <td>${posts.content}</td>
        </tr>
      )
    });

    return posts;
  }

  render() {

    return (
      <div>
        <h3>Index</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Categories</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {this.renderPosts()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postsList: state.posts.postsList,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchPostsIndex,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPosts);
