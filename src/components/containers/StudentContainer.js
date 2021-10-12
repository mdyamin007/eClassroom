import React from "react";
import "../../styles/StudentContainer.css";

const StudentContainer = ({ studentDetails }) => {
  return (
    <>
      <div className="card-student text-black p-3 m-3">
        <h5 className="fw-bold"> {studentDetails.name}</h5>
        <p>Student ID: {studentDetails.roll}</p>
        <a href={"mailto:" + studentDetails.mail}>{studentDetails.mail}</a>{" "}
        <br />
        <p>Phone: +88{studentDetails.phone}</p>
        <p>Blood Group: {studentDetails.blood}</p>
      </div>
    </>
  );
};

export default StudentContainer;
