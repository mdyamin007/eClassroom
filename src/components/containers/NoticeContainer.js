import React from "react";
import "../../styles/NoticeContainer.css";

const NoticeContainer = ({ notice }) => {
  return (
    <>
      <div className="card-notice text-dark fw-bold p-2 my-3">
        <div className="d-flex justify-content-center align-items-center p-1">
          <p className="notice-text">{notice.notice}</p>
        </div>
        <div className="d-flex flex-row-reverse">
          <p className="m-2">{notice.date}</p>
          <p className="m-2">{notice.time}</p>
        </div>
      </div>
    </>
  );
};

export default NoticeContainer;
