import './VideoItem.css';
import React from "react";

const VideoItem = ({ video, onClickVideo, addDescription }) => {
    // Reference for styling: https://semantic-ui.com/elements/list
    // Can choose from default, medium, and high quality thumnbnails
    return (
        <div
            onClick={() => {onClickVideo(video)}}
            className="video-item item">
            <img
                className="ui image"
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
                {
                    addDescription &&
                    <div
                        className="description">
                        {video.snippet.description}
                    </div>
                }
            </div>
        </div>
    );
}

export default VideoItem;
