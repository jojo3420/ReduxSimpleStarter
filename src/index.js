import _ from 'lodash';
import React, {Component} from 'react'; // core lib
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


// @TODO: hide value
const API_KEY = 'AIzaSyAZ-UXObAx8ITwneu843yYf86qCjbV_EJw';

// 1. Create a new component. this component should produce some html
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

  // 중요! state 가 변경되면 render() 가 작동한다.
  render() {
    // JSX 변환 ==> vanilla js => html
    const {videos, selectedVideo} = this.state;

    //  검색 주기 제어 : _.debounce()
    const debounceSearchVideo = _.debounce((term) => {this.searchVideo(term)}, 500);
    return (
      <div>
        <SearchBar
          onSearchVideo={debounceSearchVideo}
          // onChangeTerm={(term) => {
          //   this.setState({term});
          //   this.searchVideoByState();
          // }}
        />
        <VideoDetail video={selectedVideo}/>
        <VideoList
          selectVideo={(video) => this.setState({selectedVideo: video})}
          videos={videos}/>
      </div>
    );
  }

  searchVideo(term) {
    YTSearch(
      {key: API_KEY, term}, (videos) => {
        this.setState({
          videos,
          selectedVideo: videos[0],
        });
      });
  }

  // 내가 생각한 방식 : 상위 컴포넌트의 스테이트를 변경하여 조회 되도록 하는 방식
  // searchVideoByState() {
  //   YTSearch(
  //     {key: API_KEY, term: this.state.term}, (videos) => {
  //       this.setState({
  //         videos,
  //         selectedVideo: videos[0],
  //       });
  //     });
  // }
}


//   2. Take this component's generated HTML and put it on the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
React.createElement('div', null, 'hi');
