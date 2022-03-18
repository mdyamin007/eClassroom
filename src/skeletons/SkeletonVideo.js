import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonVideo = () => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-xxl-3 my-3">
      <div className="videoSkeleton-wrapper">
        <div className="logo__container">
          <BsFillPlayFill className="play__logoGray" />
        </div>
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <Shimmer />
      </div>
    </div>
  );
};

export default SkeletonVideo;
