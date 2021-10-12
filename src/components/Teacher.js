import React, { useEffect, useState } from "react";
import app from "../utils/Firebase";
import TeacherContainer from "./containers/TeacherContainer";
import { FaSearch } from "react-icons/fa";
import Navbar2 from "./Navbar2";
import { useCookies } from "react-cookie";
import SkeletonTeacher from "../skeletons/SkeletonTeacher";

export default function Teacher() {
  const [allTeacherList, setAllTeacherList] = useState();
  const [teacherList, setTeacherList] = useState();
  const [cookies, setCookie] = useCookies(["class"]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      setTeacherList(allTeacherList);
    } else {
      const newTeacherList = allTeacherList.filter((teacher) =>
        teacher.name.toLowerCase().includes(value)
      );
      setTeacherList(newTeacherList);
    }
  };

  useEffect(() => {
    async function getData() {
      const ID = await cookies.class;
      await app
        .database()
        .ref(`Data/${ID}/teacherdata`)
        .once("value")
        .then((snapshot) => {
          const obj = snapshot.val();
          let teacherList = [];
          for (const id in obj) {
            teacherList.push(obj[id]);
          }
          setTeacherList(teacherList);
          setAllTeacherList(teacherList);
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
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="search">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={handleSearch}
              />
              <button className="btn btn-primary">
                <FaSearch className="fa-search" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {teacherList &&
          teacherList.map((val, index) => (
            <TeacherContainer key={index} teacherDetails={val} />
          ))}
        {!teacherList && [1, 2].map((n) => <SkeletonTeacher key={n} />)}
      </div>
    </>
  );
}
