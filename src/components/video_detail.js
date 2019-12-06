import React from 'react';

const VideoDetail = (props) => {
  const { video } = props;
  if (!video) return <div>video is not selected yet!</div>;

  const videoId = video.id.videoId;
  const src =  `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className='video-detail'>
      <iframe width="560" height="315" src={src} frameBorder="0"></iframe>
    </div>
  );
};

export default VideoDetail;
