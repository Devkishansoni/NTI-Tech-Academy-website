import React from "react";

export default function ChooseUsSec() {
  const features = [
    {
      title: "Online/Offline Classrooms",
      description:
        "Real skills for real-world application. Experience interactive",
      bgColor: "bg-purple-700",
      icon: "fa-solid fa-globe",
    },
    {
      title: "Personal Mentor Support",
      description: "The most impressive is the collection of shared college",
      bgColor: "bg-blue-400",
      icon: "fa-solid fa-headset",
    },
    {
      title: "Lifetime Slack Chat Support",
      description: "North America right at your fingertips. All 24 of Turitor.",
      bgColor: "bg-blue-400",
      icon: "fa-brands fa-rocketchat",
    },
    {
      title: "Job Placement Support",
      description: "Your Career Destination: 100% Placement Guaranteed!",
      bgColor: "bg-purple-700",
      icon: "fa-brands fa-web-awesome",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-yellow-400 text-xl font-bold text-center">
        About Us
      </h2>
      <h1 className="text-4xl font-bold text-center my-4">Why Choose Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
        {features.map((feature, index) => (
          <div
            className={`p-8 ${feature.bgColor} text-white rounded-lg shadow-lg flex space-x-3 items-center`}
          >
            <div className="bg-slate-50 flex flex-col justify-center items-center w-16 h-16 rounded-full">
              <i class={`${feature.icon} text-blue-800 font-bold text-4xl`}></i>
            </div>
            <div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
