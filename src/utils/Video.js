import React from "react";




const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      // src="https://cdn.jwplayer.com/players/uZNcmMG4-z32DQ8pX.html"
      // title="IBD Video"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video;




/*
IBD Video :
https://cdn.jwplayer.com/players/uZNcmMG4-z32DQ8pX.html



*/
