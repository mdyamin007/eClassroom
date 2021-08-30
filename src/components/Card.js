import React from "react";
import "../styles/Card.css";

const Card = (props) => {
  return (
    <div className="card-container my-3 mx-auto">
      <img className="card-image mx-auto" src={props.icon} alt={props.alt} />
      <h5 className="fw-bold mx-auto ">{props.text}</h5>
    </div>
  );
};

export default Card;
