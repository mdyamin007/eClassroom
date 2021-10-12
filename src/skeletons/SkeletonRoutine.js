import React from "react";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonRoutine = () => {
  return (
    <div className="skeleton-wrapper">
      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <Shimmer />
    </div>
  );
};

export default SkeletonRoutine;
