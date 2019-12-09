import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchPostsActionCreator } from '../actions/index';
import { Link } from 'react-router';


class PostsList extends Component {

  componentWillMount() {
    // console.log('componentWillMount')
    this.props.fetchPosts();


  }

  componentDidMount() {
    // console.log('componentDidMount')
  }

  render() {
    return (
      <div>
        <span className='btn btn-primary'>
          <Link to='/posts/new'>New Post</Link>
        </span>
        posts list
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    fetchPosts: fetchPostsActionCreator,

  }, dispatch);
}
export default connect(null, mapDispatchToProps)(PostsList);
