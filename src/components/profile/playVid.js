import React from 'react';
import YouTube from 'react-youtube';
 
class PlayVid extends React.Component {
  render() {
    const opts = {
      height: '290',
      width: '440',
      playerVars: {
        autoplay: 0
      }
    };
 
    return (
      <YouTube
        videoId="CnD8g_7_-bY"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default PlayVid;