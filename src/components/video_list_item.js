import React from 'react';


const VideoListItem = (props) => {
  // selectVideo is function and parent component state has mutation.
  const { video, selectVideo } = props;
  const { snippet } = video;
  return (
    <li onClick={() => selectVideo(video)} className="list-group-item">
      <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={snippet.thumbnails.default.url}/>
          </div>
        <div className="media-body">
          <div className="media-heading">{snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
