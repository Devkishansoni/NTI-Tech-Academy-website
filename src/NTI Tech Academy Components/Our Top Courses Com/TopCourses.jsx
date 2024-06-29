import React from "react";

export default function () {

    const courses = [
        {
            btn: "Get Started",
            img : "https://www.sdadtechnology.com/blog/img/1558423496gfh.jpg",
            title: "Advance Digital Marketing Course",
            des : "We caons of passages of. Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look."
        },
        {
            btn: "View more",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl_xlzZezvOTsg2C6C5wnayLCSwT9IAfU6_g&s",
            title: "Software Testing Course",
            des : "We caons of passages of. Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look."
        },
        {
            btn: "Read more",
            img : "https://niitfoundation.org/wp-content/uploads/2021/07/Importance-of-Communication-SKills.jpg",
            title: "Communication Skills Course",
            des : "We caons of passages of. Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look."
        }
    ]

  return (
    <div className="w-full h-screen px-5 py-5 bg-white">
      <h2 className="text-yellow-400 text-xl font-bold text-center pt-16">Our Top Courses</h2>
      <h1 className="text-4xl font-bold text-center my-4 mb-5">
      Pick a Course to Get <span className="text-yellow-500"> Started</span>
          </h1>
          <div className="flex justify-center mt-10 space-x-8">
              {courses.map((val, index) => (
                  <div className="w-[340px] px-4 py-3 h-[500px] bg-[#010418] flex flex-col justify-center items-center  space-y-5 rounded-tl-2xl rounded-br-2xl drop-shadow-2xl">
                      <img src={val.img} alt="" className="w-[260px] rounded-lg" />
                      <div className="text-center space-y-3">
                      <h1 className="text-xl text-white font-bold">{val.title}</h1>
                  <p className="text-xs text-white font-bold">{val.des}
                  </p>
                          <button className="bg-yellow-500 rounded-md text-white font-serif w-28 h-12">{val.btn}</button>
                          </div>
              </div>
              ))}
              
          </div>
    </div>
  );
}
