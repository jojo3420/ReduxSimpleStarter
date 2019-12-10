import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDetailPosts, deletePosts } from '../actions/index';
import { Link } from 'react-router';
import PropTypes from 'prop-types'


class DetailPosts extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount(){
    this.props.fetchPosts(this.props.params.id);
  }


    onDeletePosts() {
      this.props.deletePosts(this.props.params.id)
        .then(() => {
          this.context.router.push("/");
        });

    }

  render() {
    const { posts } = this.props;
    if (!posts) return <div>Loading...</div>;

    return (
      <div>
        <Link to="/" className='btn btn-default'>back</Link>
        <h4>Title: {posts.title}</h4>
        <h6>Categories: {posts.categories}</h6>
        <p>Content: {posts.content}</p>
        <button
          onClick={this.onDeletePosts.bind(this)}
          className='btn btn-danger'>Delete</button>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts.selectedPosts,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchPosts: fetchDetailPosts,
    deletePosts: deletePosts,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPosts);

//ES6 ShortCut
// export default connect(mapStateToProps, {
//   fetchPosts: fetchDetailPosts,
//   deletePosts: deletePosts,
// })(DetailPosts);
