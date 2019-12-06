import React, { Component } from 'react';
// import _ from 'lodash';



class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div className='search-bar'>
        <input value={this.state.term}
               onChange={(e) => this.onInputChange(e.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    // _.debounce(this.props.searchVideo(term), 400);
    this.props.searchVideo(term);
  }

}

export default SearchBar;
