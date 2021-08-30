import React from "react";
import "../../styles/NoticeContainer.css";

const NoticeContainer = ({ notice }) => {
  const date = new Date(`${notice.date} ${notice.time}`);

  return (
    <>
      <div className="card-notice text-white p-2 my-3">
        <div className="d-flex justify-content-center align-items-center p-1">
          <p className="notice-text">{notice.notice}</p>
        </div>
        <div className="d-flex flex-row-reverse">
          <p className="m-2">{date.toLocaleTimeString()}</p>
          <p className="m-2">{date.toLocaleDateString()}</p>
        </div>
      </div>
    </>
  );
};

export default NoticeContainer;
