import React from "react";

export default function AboutNti() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-4 md:p-8 h-svh justify-center">
        {/* Left Image Section */}
        <div
          className="md:w-[600px] lg:w-[1000px] flex justify-end items-center h-full rounded-bl-full rounded-tr-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/premium-photo/data-sharing-software-development-cloud-computing-as-main-topics-symbolizes-global-inform_1037970-305.jpg?w=900)",
          }}
        >
          <div className="w-full md:w-[410px] h-[520px] space-y-3 mt-4 md:mt-0 md:ml-8 p-4 bg-black text-white rounded-lg shadow-lg">
            <h2 className="text-lg font-bold uppercase">About Us</h2>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">
              Learn New Skills to go ahead for Your{" "}
              <span className="text-yellow-400">Career</span>
            </h1>
            <p className="mt-4 text-sm md:text-base">
              NTI Academy is a significant provider of comprehensive software
              development and training services nationally, excelling in
              corporate training. As a sibling entity to NTI Pvt Ltd, it
              maintains global presence with offices in Rewa, Indore, Noida, and
              Dublin. With a track record of serving nearly 100+ businesses
              spanning various domains and technologies, we've earned
              recognition for being one of the most dependable firms with an
              in-depth grasp of...
            </p>
            <button className="bg-[#f0a316] rounded-md w-24 h-10 text-white font-semibold mt-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-4 md:p-8 h-screen justify-center">
        {/* Left Image Section */
}
<div className="md:w-[1000px] rounded-bl-full flex justify-end   rounded-tr-full items-center h-full bg-[url(https://img.freepik.com/premium-photo/data-sharing-software-development-cloud-computing-as-main-topics-symbolizes-global-inform_1037970-305.jpg?w=900)]">
  <div className="md:w-[410px] h-[520px] space-y-3 mt-4 md:mt-0 md:ml-8 p-4 bg-black text-white rounded-lg shadow-lg">
    <h2 className="text-lg font-bold uppercase">About Us</h2>
    <h1 className="text-3xl md:text-4xl font-bold mt-2">
      Learn New Skills to go ahead for Your{" "}
      <span className="text-yellow-400">Career</span>
    </h1>
    <p className="mt-4 text-sm md:text-base">
      NTI Academy is a significant provider of comprehensive software
      development and training services nationally, excelling in corporate
      training. As a sibling entity to NTI Pvt Ltd, it maintains global presence
      with offices in Rewa, Indore, Noida, and Dublin. With a track record of
      serving nearly 100+ businesses spanning various domains and technologies,
      we've earned recognition for being one of the most dependable firms with
      an in-depth grasp of...
    </p>
    <button className="bg-[#f0a316] rounded-md w-24 h-10 text-white font-semibold">
      learn More
    </button>
  </div>
</div>;
{
  /* </div> */
}
