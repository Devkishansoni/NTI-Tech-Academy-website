import React from "react";
import Img from "./Img";
import Footer from "../../NTI Tech Academy Components/Footer Com/Footer";
import SidebarSec from "./SidebarSec";
import Nav2 from "../../NTI Tech Academy Components/Navbar2 Com/Nav2";
import Nav1 from "../../NTI Tech Academy Components/Navbar1 Com/Nav1";
export default function AboutUs() {
  return (
    <>
      <Nav1/>
      <Nav2/>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row justify-between">
            <Img />
            <SidebarSec />
          </div>
        </div>
      </div>
    </>
  );
}
