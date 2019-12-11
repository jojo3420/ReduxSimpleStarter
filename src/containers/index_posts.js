import _ from 'lodash';
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router';
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
        <li className="list-group-item" key={posts.id}>
          <Link to={`/posts/${posts.id}`}>
            {posts.title}
          </Link>
        </li>
      )
    });
    return posts;
  }

  render() {

    return (
      <div>
        <h3>Index</h3>
        <Link to='/new/posts' className='btn btn-primary'>New Blog</Link>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
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
