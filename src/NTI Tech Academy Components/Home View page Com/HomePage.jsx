import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <div className="w-full h-full bg-white px-5 py-4 flex justify-center">
          <div className="flex justify-between items-center">
            <div className="w-[500px] px-3 py-3 space-y-7">
              <p className="text-xl font-semibold text-[#ff3e3e]">
                Your Gateway to IT Excellence Starts Here
              </p>
              <h1 className="text-4xl font-bold text-black">
                Ignite Your IT Career with Knowledge, Skill{" "}
                <span className="text-[#aa49ef]"> and Innovation</span>
              </h1>
              <p className="text-sm font-semibold text-[#120f15]">
                Join NTI Tech Academy, and supercharge your IT career with
                knowledge, skill, and innovation. Embark on a transformative
                tech journey with us, shaping your future in the world of
                technology.
              </p>
              <div className="flex space-x-3 items-center">
                <button className="w-32 h-10 border-b-2 border-[#d16790] rounded-md bg-blue-500 text-white transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
                  Get Started
                </button>
                <h1 className="text-sm text-black font-semibold">
                  Discover more{" "}
                  <i class="fa-solid fa-greater-than text-[11px] font-extrabold text-red-800 pl-2"></i>
                </h1>
              </div>
            </div>
            <div className="">
              <img
                src="https://varthana.com/school/wp-content/uploads/2023/02/B193.jpg"
                alt=""
                className="w-[700px]"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
