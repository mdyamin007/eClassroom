import React from "react";
import "../../styles/VideoContainer.css";
import { BsFillPlayFill } from "react-icons/bs";

const VideoContainer = ({ videoDetails }) => {
  return (
    <>
      <a
        href={videoDetails.link}
        rel="noopener noreferrer"
        target="_blank"
        className="text-decoration-none col-12 col-sm-6 col-md-4 col-xxl-3"
      >
        <div className=" card-video text-dark fw-bold m-3">
          <div className="logo__container">
            <BsFillPlayFill className="play__logo" />
          </div>
          <div className="fw-lighter card__content">
            <p className="fw-bold">Video: {videoDetails.videoName}</p>
            <p>Category: {videoDetails.subjectName}</p>
            <p>Teacher: {videoDetails.teacherName}</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default VideoContainer;
