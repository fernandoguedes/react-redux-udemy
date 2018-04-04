import React from 'react';

const VideoListItem = ({ video }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  console.log(video.snippet)

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );

  return <li>Video</li>
};

export default VideoListItem;
