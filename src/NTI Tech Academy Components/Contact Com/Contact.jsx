import React from "react";

const Contact = () => {
  return (
    <div className="min-h-svh flex justify-center items-center bg-gray-100 w-full">
      <div className="bg-white shadow-md rounded-lg flex overflow-hidden max-w-4xl w-full">
        <div className="bg-yellow-400 w-1/3 p-8 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <address className="not-italic mb-4">
            LIG - 2/21/422, Nehru Nagar,
            <br />
            Rewa, Madhya Pradesh 486001
          </address>
          <p className="mb-4 mr-32">
            <strong>Phone:</strong>
            <br /> <a href="tel:09174253016">091742 53016</a>
          </p>
          <p className="mb-4">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@ntitechacademy.com">info@ntitechacademy.com</a>
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a href="http://www.ntitechacademy.com">www.ntitechacademy.com</a>
          </p>
        </div>
        <div className="bg-white w-2/3 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">
            Contact Us
          </h2>
          <h3 className="text-3xl font-bold mb-4">
            Get In Touch <span className="text-yellow-500">With Us</span>
          </h3>
          <p className="mb-4">
            <strong>Our Location:</strong>
            <br />
            LIG - 2/21/422, Nehru Nagar, Rewa MP - 486001
          </p>
          <p className="mb-4">
            <strong>Our Contact:</strong>
            <br />
            07662-462289, 091742 53016
          </p>
          <p>
            <strong>Mail Us:</strong>
            <br />
            info@ntitechacademy.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
