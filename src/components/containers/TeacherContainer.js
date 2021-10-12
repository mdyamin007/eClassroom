import React from "react";
import "../../styles/TeacherContainer.css";

const TeacherContainer = ({ teacherDetails }) => {
  return (
    <>
      <div className="card-teacher text-dark p-3 m-3">
        <h5 className="fw-bold"> {teacherDetails.name}</h5>
        <p>{teacherDetails.qualification}</p>
        <p>{teacherDetails.graduatedFrom}</p>
        <p>{teacherDetails.office}</p>
        <a href={"mailto:" + teacherDetails.mail}>{teacherDetails.mail}</a>
        <br />
        <p>{teacherDetails.phone}</p>
      </div>
    </>
  );
};

export default TeacherContainer;
