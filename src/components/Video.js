import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import SkeletonVideo from "../skeletons/SkeletonVideo";
import app from "../utils/Firebase";
import VideoContainer from "./containers/VideoContainer";
import Navbar2 from "./Navbar2";

export default function Video() {
  const [subjectList, setSubjectList] = useState();
  const [allVideoList, setAllVideoList] = useState();
  const [videoList, setVideoList] = useState();
  const [cookies, setCookie] = useCookies(["class"]);

  const handleSelect = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "All") {
      setVideoList(allVideoList);
    } else {
      const newVideoList = allVideoList.filter(
        (val) => val.subjectName === selectedValue
      );
      setVideoList(newVideoList);
    }
  };

  useEffect(() => {
    async function getData() {
      const ID = await cookies.class;
      await app
        .database()
        .ref(`Data/${ID}/video`)
        .once("value")
        .then((snapshot) => {
          const obj = snapshot.val();
          let subjects = [];
          let videoList = [];
          for (const id in obj) {
            subjects.push(obj[id].subjectName);
            videoList.push(obj[id]);
          }
          const subjectList = subjects.filter(
            (value, index, self) => self.indexOf(value) === index
          );
          setSubjectList(subjectList);
          setAllVideoList(videoList);
          setVideoList(videoList);
        })
        .catch((e) => {
          alert(e);
        });
    }
    getData();
  }, []);

  // console.log(subjectList);

  return (
    <>
      <Navbar2 />
      <div className="container mb-4 mt-3">
        <select
          className="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
          onChange={handleSelect}
        >
          <option defaultValue="All">All</option>
          {subjectList &&
            subjectList.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
        </select>
      </div>
      <div className="container">
        <div className="row">
          {videoList &&
            videoList.map((val, index) => (
              <VideoContainer key={index} videoDetails={val} />
            ))}

          {!videoList &&
            [1, 2, 3, 4, 5, 6, 7, 8].map((n) => <SkeletonVideo key={n} />)}
        </div>
      </div>
    </>
  );
}
