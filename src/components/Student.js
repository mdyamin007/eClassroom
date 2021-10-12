import React, { useEffect, useState } from "react";
import app from "../utils/Firebase";
import StudentContainer from "./containers/StudentContainer";
import { FaSearch } from "react-icons/fa";
import "../styles/Student.css";
import Navbar2 from "./Navbar2";
import { useCookies } from "react-cookie";
import SkeletonStudent from "../skeletons/SkeletonStudent";

export default function Student() {
  const [allStudentList, setAllStudentList] = useState();
  const [studentList, setStudentList] = useState();
  const [cookies, setCookie] = useCookies(["class"]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      setStudentList(allStudentList);
    } else {
      const newStudentList = allStudentList.filter((student) => {
        const studentName = student.name.toLowerCase();
        const studentID = student.roll;
        return studentName.includes(value) || studentID.includes(value);
      });
      setStudentList(newStudentList);
    }
  };

  useEffect(() => {
    async function getData() {
      const ID = await cookies.class;
      await app
        .database()
        .ref(`Data/${ID}/userinfo`)
        .once("value")
        .then((snapshot) => {
          const obj = snapshot.val();
          let allStudentList = [];
          for (const id in obj) {
            allStudentList.push(obj[id]);
          }
          setAllStudentList(allStudentList);
          setStudentList(allStudentList);
        })
        .catch((e) => {
          alert(e);
        });
    }
    getData();
  }, []);

  //   console.log(allStudentList);

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
        {studentList &&
          studentList.map((val, index) => (
            <StudentContainer key={index} studentDetails={val} />
          ))}
        {!studentList && [1, 2, 3].map((n) => <SkeletonStudent key={n} />)}
      </div>
    </>
  );
}
