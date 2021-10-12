import React from "react";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonVideoSlide = () => {
  return (
    <div className="skeleton-wrapper">
      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
      <Shimmer />
    </div>
  );
};

export default SkeletonVideoSlide;
