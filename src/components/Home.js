import React from "react";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <div className="square1"></div>
      <div className="square2"></div>
      <div className="square3"></div>
      <div className="square4"></div>
    </>
  );
}
