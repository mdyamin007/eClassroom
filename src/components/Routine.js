import React, { useEffect, useState } from "react";
import app from "../Firebase";
import cookies from "../utils/cookies";
import RoutineContainer from "./containers/RoutineContainer";
import Days from "./Days";
import Navbar2 from "./Navbar2";

const Routine = () => {
  const [classID, setClassID] = useState();
  const [routines, setRoutines] = useState();

  useEffect(() => {
    async function getClassID() {
      const ID = await cookies.get("class");
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
          console.log(snapshot.val());
          const object = snapshot.val();
          let classList = [];
          for (const id in object) {
            classList.push(object[id]);
          }
          setRoutines(classList);
          console.log(routines);
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
      </div>
    </>
  );
};

export default Routine;
