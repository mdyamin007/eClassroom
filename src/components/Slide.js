import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import SkeletonSlide from "../skeletons/SkeletonSlide";
import app from "../utils/Firebase";
import SlideContainer from "./containers/SlideContainer";
import Navbar2 from "./Navbar2";

export default function Slide() {
  const [subjectList, setSubjectList] = useState();
  const [allSlideList, setAllSlideList] = useState();
  const [slideList, setSlideList] = useState();
  const [cookies, setCookie] = useCookies(["class"]);

  const handleSelect = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "All") {
      setSlideList(allSlideList);
    } else {
      const newSlideList = allSlideList.filter(
        (val) => val.subjectName === selectedValue
      );
      setSlideList(newSlideList);
    }
  };

  useEffect(() => {
    async function getData() {
      const ID = await cookies.class;
      await app
        .database()
        .ref(`Data/${ID}/slide`)
        .once("value")
        .then((snapshot) => {
          const obj = snapshot.val();
          let subjects = [];
          let slideList = [];
          for (const id in obj) {
            subjects.push(obj[id].subjectName);
            slideList.push(obj[id]);
          }
          const subjectList = subjects.filter(
            (value, index, self) => self.indexOf(value) === index
          );
          setSubjectList(subjectList);
          setAllSlideList(slideList);
          setSlideList(slideList);
        })
        .catch((e) => {
          alert(e);
        });
    }
    getData();
  }, []);

  //   console.log(subjectList);
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
          {slideList &&
            slideList.map((val, index) => (
              <SlideContainer key={index} slideDetails={val} />
            ))}
          {!slideList &&
            [1, 2, 3, 4, 5, 6, 7, 8].map((n) => <SkeletonSlide key={n} />)}
        </div>
      </div>
    </>
  );
}
