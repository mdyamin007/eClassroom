import React from "react";
import { IoWarningSharp } from "react-icons/io5";

export default function PageNotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-danger">
      <IoWarningSharp
        style={{
          height: "150px",
          width: "150px",
          color: "red",
        }}
      />
      <h1 className="display-1 fw-bold">404 Not Found !!!</h1>
    </div>
  );
}
