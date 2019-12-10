import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDetailPosts } from '../actions/index';



class DetailPosts extends Component {

  componentDidMount(){
    this.props.fetchPosts(this.props.params.id);
  }

  render() {
    const { posts } = this.props;
    if (!posts) return <div>Loading...</div>;

    return (
      <div>
        <h4>Title: {posts.title}</h4>
        <h6>Categories: {posts.categories}</h6>
        <p>Content: {posts.content}</p>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts.selectedPosts,
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     fetchPosts: fetchDetailPosts,
//   }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DetailPosts);

//ES6 ShortCut
export default connect(mapStateToProps, {fetchPosts: fetchDetailPosts})(DetailPosts);
