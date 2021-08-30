import React from "react";
import DayButton from "./DayButton";

const Days = ({ handleDay }) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return (
    <div className="container mt-3">
      {days.map((day, index) => (
        <DayButton key={index} text={day} handleDay={handleDay} />
      ))}
    </div>
  );
};

export default Days;
