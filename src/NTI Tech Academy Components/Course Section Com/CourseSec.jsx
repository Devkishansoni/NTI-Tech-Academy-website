import React from "react";
const courses = [
  {
    title: "Software Testing Training",
    bgColor: "bg-black",
    icon: "fa-solid fa-layer-group",
  },
  {
    title: "Graphic & Web Design Course",
    bgColor: "bg-yellow-400",
    icon: "fa-brands fa-firefox",
  },
  {
    title: "Digital Marketing Course",
    bgColor: "bg-black",
    icon: "fa-solid fa-chart-column",
  },
  {
    title: "Full Stack Development Course",
    bgColor: "bg-yellow-400",
    icon: "fa-solid fa-desktop",
  },
  {
    title: "Communication Skills & Soft Skill Course",
    bgColor: "bg-black",
    icon: "fa-regular fa-lightbulb",
  },
  {
    title: "Data Science / Analytics Course",
    bgColor: "bg-yellow-400",
    icon: "fa-solid fa-people-group",
  },
];
export default function CourseSec() {
  return (
    <div className="container mx-auto p-4 pt-10 h-svh w-full">
      <h2 className="text-yellow-400 text-xl font-bold text-center">
        Our IT Courses
      </h2>
      <h1 className="text-4xl font-bold text-center my-4">
        Your Gateway to IT Excellence Starts Here - Enroll Now!
      </h1>
      <div className="flex space-x-4 justify-center mt-8 mb-10">
        {courses.map((course, index) => (
          <div
            className={`w-[210px] h-52 ${course.bgColor} rounded-tl-xl rounded-br-xl px-2 py-2 drop-shadow-2xl flex flex-col items-center justify-center text-center space-y-2  transform transition-transform duration-300 hover:scale-1 hover:shadow-lg`}
          >
            <div className="bg-zinc-400 px-1 py-1 rounded-full w-14 h-14 flex flex-col justify-center items-center">
              <i class={`${course.icon} text-white text-[30px]`}></i>
            </div>
            <p className="text-white text-[18px] font-semibold">
              {course.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
