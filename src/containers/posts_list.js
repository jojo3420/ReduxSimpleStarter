import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchPostsActionCreator } from '../actions/index';
import { Link } from 'react-router';

class PostsList extends Component {

  // !DEPRECATE
  // componentWillMount() {
  //   // console.log('componentWillMount');
  //   this.props.fetchPosts();
  // }

  componentDidMount() {
    // console.log('componentDidMount');
    this.props.fetchPosts();
  }

  renderPosts() {
    const { postsList } = this.props;
    // console.log('postsList:', postsList);

    return postsList.map((post) => {
      return (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <li className='list-group-item'>
            <span className='pull-xs-right'>{post.categories}</span>
            <strong>{post.title}</strong>
            {/*<p>{post.id}</p>*/}
          </li>
        </Link>
      );
    })
  }
  render() {
    // console.log('render');

    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/posts/new' className="btn btn-primary">New Post</Link>
        </div>
        <h3>posts list </h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postsList: state.posts.postsList
  }
}


function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    fetchPosts: fetchPostsActionCreator,

  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
