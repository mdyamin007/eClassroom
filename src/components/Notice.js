import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import SkeletonNotice from "../skeletons/SkeletonNotice";
import app from "../utils/Firebase";
import NoticeContainer from "./containers/NoticeContainer";
import Navbar2 from "./Navbar2";

const Notice = () => {
  const [classID, setClassID] = useState();
  const [notices, setNotices] = useState();
  const [cookies, setCookie] = useCookies(["class"]);

  useEffect(() => {
    async function getClassIDandNotices() {
      const ID = await cookies.class;
      setClassID(ID);
      await app
        .database()
        .ref(`Data/${classID}/notice`)
        .once("value")
        .then((snapshot) => {
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

  return (
    <>
      <Navbar2 />
      <div className="container">
        {notices &&
          notices.map((notice, index) => (
            <NoticeContainer key={index} notice={notice} />
          ))}
        {!notices && [1, 2, 3, 4].map((n) => <SkeletonNotice key={n} />)}
      </div>
    </>
  );
};

export default Notice;
