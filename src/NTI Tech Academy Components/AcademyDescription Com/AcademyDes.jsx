import React from "react";

export default function AcademyDes() {
  const data = [
    {
      icon: "fa-solid fa-graduation-cap",
      title: "Training",
      des: "Unlock Your Full Tech Potential: Join Our IT Training Institute Today",
      bgcolor: "bg-[#0c0c1c]",
    },
    {
      icon: "fa-regular fa-window-restore",
      title: "Web Development",
      des: "Join the Web Revolution - Be the Mastermind Behind Stunning Websites.",
      bgcolor: "bg-[#394312]",
    },
    {
      icon: "fa-solid fa-user-graduate",
      title: "Consulting",
      des: "Innovation Through Insight: Discover Excellence with Our Consulting Services.",
      bgcolor: "bg-[#3f7e5e]",
    },
    {
      icon: "fa-solid fa-award",
      title: "100% Placement",
      des: " Our Commitment: Ensuring You Land Your Dream Job - 100% Placement.",
      bgcolor: "bg-[#e2d030]",
    },
  ];

  return (
    <>
      <div className="w-full bg-white px-4 py-4 flex justify-center h-svh">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((val, index) => (
            <div
              key={index}
              className={`${val.bgcolor} w-full h-60 px-2 py-2 drop-shadow-xl flex flex-col items-center justify-center text-center space-y-2`}
            >
              <div className="bg-zinc-400 px-1 py-1 rounded-full w-14 h-14 flex flex-col justify-center items-center">
                <i className={`${val.icon} text-white text-[30px]`}></i>
              </div>
              <h1 className="text-white text-2xl font-bold">{val.title}</h1>
              <p className="text-white text-[18px] font-semibold">{val.des}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
