import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

export default function Home() {
  const { currentUser, store } = useContext(AuthContext);


  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}
