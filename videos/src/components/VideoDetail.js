import React from 'react';

const VideoDetail = ({ activeVideo }) => {
    return (
        <div>
            {
                (
                    activeVideo &&
                    <div>
                        <div className="ui embed">
                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideo.id.videoId}`}
                                title={activeVideo.snippet.title}

                            />
                        </div>
                        <div className="ui segment">
                            <h4 className="ui header">{activeVideo.snippet.title}</h4>
                            <p className="content">{activeVideo.snippet.description}</p>
                        </div>
                    </div>
                ) || <p>No Video Item Selected</p>
            }
        </div>
    );
}

export default VideoDetail;
