import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="mb-4 w-full bg-gray-100 flex flex-col justify-center items-center pb-14">
        <h2 className="text-lg font-bold text-yellow-500">News Circle</h2>
        <h3 className="text-3xl font-bold">
          Latest from our <span className="text-yellow-500">Blog</span>
        </h3>
      </div>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4 my-4">
            <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
              <a
                href="https://facebook.com"
                className="text-yellow-500 hover:text-red-900"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
              <a
                href="https://twitter.com"
                className="text-yellow-500 hover:text-red-900"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
              <a
                href="https://linkedin.com"
                className="text-yellow-500 hover:text-red-900"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>

            <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
              <a
                href="https://instagram.com"
                className="text-yellow-500 hover:text-red-900"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <nav className="mb-4">
            <a href="/" className="mx-2 hover:text-yellow-500">
              Home
            </a>{" "}
            /
            <a href="/blog" className="mx-2 hover:text-yellow-500">
              Blog
            </a>{" "}
            /
            <a href="/about" className="mx-2 hover:text-yellow-500">
              About Us
            </a>{" "}
            /
            <a href="/courses" className="mx-2 hover:text-yellow-500">
              Our Courses
            </a>
          </nav>
          <p className="text-sm">
            Copyright ©2024 NTI Tech Academy. All rights reserved. Powered by
            WordPress & Designed by Bizberg Themes
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
