import React from "react";
import "./Nav2.css"

export default function Nav2() {
  return (
    <>
      <div className="w-full h-16 bg-white shadow-xl py-3 px-4 flex justify-between items-center">
        <div className="text-xl text-black font-semibold">
          <h1>NTI TECH ACADEMY</h1>
              </div>
              <div>
                  <ul className="flex gap-6 px-8 text-sm font-semibold font-sans items-center">
                      <li>Home</li>
                      <li>Blog</li>
                      <li>About</li>
                      <li className="m-0 p-0 list-none">Our Courses
            <select className="m-0 p-0 border-none focus:outline-none focus:ring-0 focus:border-transparent custom-scrollbar">
                <option className="m-0 p-0"></option>
                <option className="m-0 p-0">Communication skill</option>
                <option className="m-0 p-0">Software Testing</option>
                <option className="m-0 p-0">Java Full Stack Development</option>
                <option className="m-0 p-0">Core Java</option>
                <option className="m-0 p-0">C Programming</option>
                <option className="m-0 p-0">Digital Marketing</option>
                <option className="m-0 p-0">AI Using Python</option>
                <option className="m-0 p-0">Data Science</option>
                <option className="m-0 p-0">Graphic Design</option>
                <option className="m-0 p-0">AWS</option>
                <option className="m-0 p-0">C++</option>
                <option className="m-0 p-0">Python</option>
                <option className="m-0 p-0">MERN Stack Development</option>
            </select>
        </li>
                      <li><i class="fa-solid fa-magnifying-glass"></i></li>
                      <li>
                          <button className="bg-[#f6ae28] w-24 h-10 text-white font-semibold">Contact</button>
                      </li>
                  </ul>
              </div>
      </div>
    </>
  );
}
