import React from "react";
import "../../styles/StudentContainer.css";

const StudentContainer = ({ studentDetails }) => {
  return (
    <>
      <div className="card-student text-white p-3 m-3">
        <h5 className="fw-bold"> {studentDetails.name}</h5>
        <p>Student ID: {studentDetails.roll}</p>
        <p>Email: {studentDetails.mail}</p>
        <p>Phone: {studentDetails.phone}</p>
        <p>Blood Group: {studentDetails.blood}</p>
      </div>
    </>
  );
};

export default StudentContainer;
