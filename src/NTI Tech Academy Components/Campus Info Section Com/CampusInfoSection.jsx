import React from "react";

const CampusInfoSection = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 p-6">
          <h2 className="text-yellow-500 font-bold text-lg mb-2">
            Our campus information
          </h2>
          <h1 className="text-4xl font-bold mb-4">
            A Building With Four Walls And Tomorrow{" "}
            <span className="text-yellow-500">Inside</span>
          </h1>
          <p className="mb-6">
            Our institute boasts a team of highly qualified IT industry
            specialists who serve as trainers. They bring extensive expertise to
            each course, aligning curriculum with current industry demands to
            ensure students receive a comprehensive and up-to-date education.
          </p>
          <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
            Apply Now
          </button>
        </div>
        <div className="lg:w-1/2">
          <img
            className="w-full rounded-lg"
            src="https://img.freepik.com/free-photo/look-this-group-young-people-casual-clothes-working-modern-office_146671-16519.jpg?t=st=1719473177~exp=1719476777~hmac=6efd4340396cb727a74e0342114c3b362324df90378e6e9a4d7b8f1880b96209&w=900"
            alt="Students"
          />
        </div>
      </div>
    </div>
  );
};

export default CampusInfoSection;
