import React from "react";
import { BsBookHalf } from "react-icons/bs";
import "../../styles/SlideContainer.css";

const SlideContainer = ({ slideDetails }) => {
  return (
    <>
      <a
        href={slideDetails.link}
        rel="noopener noreferrer"
        target="_blank"
        className="text-decoration-none col-12 col-sm-6 col-md-4 col-xxl-3"
      >
        <div className="card-slide fw-bold p-3 m-3">
          <div className="bookLogo__container">
            <BsBookHalf className="book__logo" />
          </div>
          <p>{slideDetails.slideName}</p>
          <p>{slideDetails.subjectName}</p>
          <p>{slideDetails.teacherName}</p>
        </div>
      </a>
    </>
  );
};

export default SlideContainer;
