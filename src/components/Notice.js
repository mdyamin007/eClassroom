import React, { useState, useEffect } from "react";
import cookies from "../utils/cookies";
import app from "../Firebase";
import NoticeContainer from "./containers/NoticeContainer";
import Navbar2 from "./Navbar2";

const Notice = () => {
  const [classID, setClassID] = useState();
  const [notices, setNotices] = useState();

  useEffect(() => {
    async function getClassIDandNotices() {
      const ID = await cookies.get("class");
      setClassID(ID);
      await app
        .database()
        .ref(`Data/${classID}/notice`)
        .once("value")
        .then((snapshot) => {
          console.log(snapshot.val());
          const object = snapshot.val();
          let noticeList = [];
          for (const id in object) {
            noticeList.push(object[id]);
          }
          setNotices(noticeList);
        })
        .catch((e) => {
          alert(e);
        });
    }
    getClassIDandNotices();
  }, [classID]);

  console.log(notices);

  return (
    <>
      <Navbar2 />
      <div className="container">
        {notices &&
          notices.map((notice, index) => (
            <NoticeContainer key={index} notice={notice} />
          ))}
      </div>
    </>
  );
};

export default Notice;
