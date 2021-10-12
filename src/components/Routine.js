import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import SkeletonRoutine from "../skeletons/SkeletonRoutine";
import app from "../utils/Firebase";
import RoutineContainer from "./containers/RoutineContainer";
import Days from "./Days";
import Navbar2 from "./Navbar2";

const Routine = () => {
  const [classID, setClassID] = useState();
  const [routines, setRoutines] = useState();
  const [cookies, setCookie] = useCookies(["class"]);

  useEffect(() => {
    async function getClassID() {
      const ID = await cookies.class;
      setClassID(ID);
      return ID;
    }
    getClassID();
  }, []);

  const handleDay = (e) => {
    if (classID) {
      const day = e.target.textContent;
      app
        .database()
        .ref(`Data/${classID}/routine/${day}`)
        .once("value")
        .then((snapshot) => {
          const object = snapshot.val();
          let classList = [];
          for (const id in object) {
            classList.push(object[id]);
          }
          setRoutines(classList);
        });
    } else {
      alert("Class not connected!");
    }
  };
  return (
    <>
      <Navbar2 />
      <Days handleDay={handleDay} />
      <div className="container">
        {routines &&
          routines.map((classDetails, index) => (
            <RoutineContainer key={index} classDetails={classDetails} />
          ))}
        {!routines && [1, 2].map((n) => <SkeletonRoutine key={n} />)}
      </div>
    </>
  );
};

export default Routine;
