import React from 'react';

const VideoListItem = (props) => {
  const { video, selectVideo } = props;
  const { snippet } = video;

  return (
    <li onClick={()=> selectVideo(video)} className='list-group-item'>
      <div>
        <div>
          <img src={snippet.thumbnails.default.url} art={snippet.title}/>
        </div>
        <div>
          <p>{snippet.title}</p>
        </div>
      </div>
    </li>
  );

};

export default VideoListItem;
