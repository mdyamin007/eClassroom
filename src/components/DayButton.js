import React from "react";

const DayButton = (props) => {
  const handleDay = (e) => {
    props.handleDay(e);
  };
  return (
    <button className="btn btn-secondary mx-2 my-2" onClick={handleDay}>
      {props.text}
    </button>
  );
};

export default DayButton;
