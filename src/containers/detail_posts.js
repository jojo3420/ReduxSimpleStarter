import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsById, deletePostsBy } from "../actions";
import { Link } from 'react-router';
import PropType from "prop-types";
import {bindActionCreators} from "redux";

class DetailPosts extends Component {

  static contextTypes = {
    router: PropType.object
  };

  componentDidMount() {
    this.props.fetchBy(this.props.params.id);
  }

  onDeletePosts() {
    this.props.deletePostsBy(this.props.params.id)
      .then(() => {
        this.context.router.push("/");
      })

  }
  render() {
    const { posts } = this.props;
    if(!posts) return <div>Loading...</div>;

    return (
      <div>
        <h4>Detail</h4>
        <h6>{posts.title}</h6>
        <span>{posts.categories}</span>
        <p>{posts.content}</p>
        <div>
          <button
            onClick={this.onDeletePosts.bind(this)}
            type="button"
            className="btn btn-danger">DELETE</button>
          <Link to="/" className='btn btn-warning'>back</Link>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  // console.log('mapStateToProps() state:', state);
  return {
    posts: state.postsData.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchBy: fetchPostsById,
    deletePostsBy: deletePostsBy,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPosts);
