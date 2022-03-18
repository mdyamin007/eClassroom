import React from "react";
import { BsBookHalf } from "react-icons/bs";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonSlide = () => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-xxl-3 my-3">
      <div className="videoSkeleton-wrapper">
        <div className="bookLogo__container">
          <BsBookHalf className="play__logoGray" />
        </div>
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <Shimmer />
      </div>
    </div>
  );
};

export default SkeletonSlide;
