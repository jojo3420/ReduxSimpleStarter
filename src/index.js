import React, {Component} from 'react'; // core lib
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from "./components/video_detail";
import _ from 'lodash';

const API_KEY = 'AIzaSyAZ-UXObAx8ITwneu843yYf86qCjbV_EJw';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      term: '백예린',
    };

    this.searchVideo(this.state.term);
  }

  render () {

    const debounceSearchVideo = _.debounce((term) => this.searchVideo(term), 400);

    return (
      <div>
        <SearchBar searchVideo={debounceSearchVideo}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos}
                   selectVideo={(video) => this.setState({selectedVideo: video})}
        />
      </div>
    );
  }

  searchVideo(term) {
    YTSearch({key: API_KEY, term},(videos) => {
      // console.log(videos);
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }
}

//   2. Take this component's generated HTML and put it on the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
