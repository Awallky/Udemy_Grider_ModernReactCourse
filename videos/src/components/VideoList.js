import React from "react";

import VideoItem from "./VideoItem";

const VideoList = (props) => {
    let lst;
    if (props.youtubeVideos.items !== undefined && props.youtubeVideos.items.length > 0) {
        lst = props.youtubeVideos.items.map(video => {
            return <VideoItem onClickVideo={props.onClickVideo} key={video.id.videoId} video={video} />
        });
    }
    return (
        <div className="ui relaxed divided list">
            {lst}
        </div>
    );
}

export default VideoList;
