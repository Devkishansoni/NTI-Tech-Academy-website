import React from "react";

const teachers = [
  { name: "Mukesh Sharma", role: "Language Trainer" },
  { name: "Gaurav Shukla", role: "AWS Trainer" },
  { name: "Sandeep Singh", role: "Software Trainer" },
];

const TeachersSection = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center">
      <h2 className="text-yellow-400 text-xl font-bold text-center pt-28">Pricing</h2>
      <h1 className="text-4xl font-bold text-center my-4 mb-5">
        Join the <span className="text-yellow-500">Revolution</span>
      </h1>
      <div className="bg-yellow-400 text-white w-full h-[340px] mt-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <h2 className="text-xl font-bold">Our Teachers</h2>
            <h1 className="text-4xl font-bold my-4">
              Meet Our Expert Teachers
            </h1>
            <p className="mb-4 text-black font-semibold">
              Meet the NTI Tech Academy's exceptional teaching team. Our expert
              instructors bring extensive industry experience and unwavering
              dedication to your education. With a passion for their respective
              fields, they bridge theory and practice, providing you with
              real-world insights.
            </p>
            <p className=" text-black font-semibold">
              Join NTI Tech Academy to become part of a community led by these
              remarkable educators, ensuring you receive top-notch education and
              guidance to thrive in the ever-evolving tech industry.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 rounded-bl-full rounded-tr-full bg-[#0c0c25] flex justify-around items-center">
            <div className=" flex flex-col justify-center items-start">
              {teachers.map((teacher, index) => (
                <div key={index} className="my-1 ml-3">
                  <h3 className="text-xl font-bold">{teacher.name}</h3>
                  <p>{teacher.role}</p>
                </div>
              ))}
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-photo/smiling-young-business-woman-glasses-with-pen-clipboard_155003-16271.jpg?t=st=1719573382~exp=1719576982~hmac=4cdcee5a4df5b25fb698043f64c2bbbac3f117d050594b9a27d89be67da7edb4&w=360"
                alt=""
                className="w-44 h-56 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersSection;
