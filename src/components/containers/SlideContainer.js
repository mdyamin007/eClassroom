import React from "react";
import "../../styles/SlideContainer.css";

const SlideContainer = ({ slideDetails }) => {
  return (
    <>
      <a
        href={slideDetails.link}
        rel="noopener noreferrer"
        target="_blank"
        className="text-decoration-none"
      >
        <div className="card-slide text-dark fw-bold p-3 m-3">
          <p>{slideDetails.slideName}</p>
          <p>{slideDetails.subjectName}</p>
          <p>{slideDetails.teacherName}</p>
        </div>
      </a>
    </>
  );
};

export default SlideContainer;
