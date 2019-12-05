import React, { Component } from 'react';
import VideoListItem  from './video_list_item';


const VideoList = (props) => {
  const { videos, selectVideo } =  props;

  // loop 를 돌면서 비디오 아이템을 배열에 넣는다.
  const videoItems = videos.map((video) => {
    return (
      <VideoListItem key={video.etag}
                     video={video}
                     selectVideo={selectVideo}
      />
      );
  });


  return (
    <ul className='col-md-4 list-group'>
      {/* 배열안의 아이템 인스턴스! */ videoItems}
    </ul>
  )
};

export default VideoList;

