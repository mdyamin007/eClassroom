import React from "react";
import "../../styles/RoutineContainer.css";

export default function RoutineContainer({ classDetails }) {
  return (
    <>
      <div className="card-routine my-3">
        <div className="row p-2">
          <div className="col-3 d-flex justify-content-center align-items-center">
            <p className="x-auto text-dark fw-bold">{classDetails.startTime}</p>
          </div>
          <div className="col-6 d-flex flex-column justify-content-center align-items-center">
            <h5 className="text-dark fw-bold">{classDetails.className}</h5>
            <p className="text-dark fw-bold">{classDetails.teacher}</p>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center">
            <a className="text-warning fw-bold" href={classDetails.link}>
              Join Class
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
