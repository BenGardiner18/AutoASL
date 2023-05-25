import React from "react";

function VideoBox(props) {
    const { transcript } = props;

    return (
        <div className="container">
            <h1 className="text-title">Video Box</h1>
            <div className="video-box">
                <p>Transcript: {transcript}</p>
            </div>
        </div>
    );
}

export default VideoBox;