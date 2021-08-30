import React from "react";
import "../../styles/TeacherContainer.css";

const TeacherContainer = ({ teacherDetails }) => {
  return (
    <>
      <div className="card-teacher text-white p-3 m-3">
        <h5 className="fw-bold"> {teacherDetails.name}</h5>
        <p>{teacherDetails.qualification}</p>
        <p>{teacherDetails.graduatedFrom}</p>
        <p>{teacherDetails.office}</p>
        <p>{teacherDetails.mail}</p>
        <p>{teacherDetails.phone}</p>
      </div>
    </>
  );
};

export default TeacherContainer;
