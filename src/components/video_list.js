import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
  const { videos, selectVideo } = props;
  if (videos && videos.length === 0) return <p>loading..</p>;

  const videoItems = videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} selectVideo={selectVideo} />
  });

  return (
    <ul className='video-list list-group'>
      {videoItems}
      {/*size: {videos.length}*/}
    </ul>
  )
};

export default VideoList;
