import React from "react";
import "../../styles/VideoContainer.css";

const VideoContainer = ({ videoDetails }) => {
  return (
    <>
      <a href={videoDetails.link} rel="noopener noreferrer" target="_blank" className="text-decoration-none">
        <div className="card-video text-white p-3 m-3">
          <p>Video: {videoDetails.videoName}</p>
          <p>Category: {videoDetails.subjectName}</p>
          <p>Teacher: {videoDetails.teacherName}</p>
        </div>
      </a>
    </>
  );
};

export default VideoContainer;
