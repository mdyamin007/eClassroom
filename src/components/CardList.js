import React from "react";
import Card from "./Card";
import routine from "../images/routine.png";
import notice from "../images/notice.png";
import video from "../images/video.png";
import slide from "../images/slide.png";
import info from "../images/info.png";
import { Link, withRouter } from "react-router-dom";

const CardList = () => {
  return (
    <>
      <div className="container container-card">
        <div className="row">
          <div className="col-12 col-md-4">
            <Link to="/routine" className="text-decoration-none text-black">
              <Card icon={routine} text={"Routine"} alt={"Routine"} />
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/notice" className="text-decoration-none text-black">
              <Card icon={notice} text={"Notice"} alt={"Notice"} />
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/video" className="text-decoration-none text-black">
              <Card icon={video} text={"Video"} alt={"Video"} />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <Link to="/slide" className="text-decoration-none text-black">
              <Card icon={slide} text={"Slide"} alt={"Slide"} />
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/student" className="text-decoration-none text-black">
              <Card icon={info} text={"Student Info"} alt={"Student Info"} />
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Link to="/teacher" className="text-decoration-none text-black">
              <Card icon={info} text={"Teacher Info"} alt={"Teacher Info"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(CardList);
