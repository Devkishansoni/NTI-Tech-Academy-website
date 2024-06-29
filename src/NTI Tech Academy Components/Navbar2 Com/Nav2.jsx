import React, { useState } from "react";

export default function Nav2() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full h-16 bg-white drop-shadow-xl py-3 px-7 flex justify-between items-center">
        <div className="text-xl text-black font-semibold">
          <h1>NTI TECH ACADEMY</h1>
        </div>
        <div>
          <ul className="flex gap-6 px-8 text-sm font-semibold font-sans items-center">
            <li>Home</li>
            <li>Blog</li>
            <li>About</li>
            <div className="relative inline-block text-left">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-[#ebac2e] text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                onClick={toggleDropdown}
              >
                OUR COURSES
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isOpen && (
                <ul className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <li className="p-0 list-none text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                    Communication skill
                  </li>
                  <li className="p-0 list-none text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                    Software Testing
                  </li>
                  <li className="p-0 list-none text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                    Java Full Stack Development
                  </li>
                  <li className="p-0 list-none text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                    Core Java
                  </li>
                  <li className="p-0 list-none text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                    C Programming
                  </li>
                  <li className="p-0 list-none text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                    Digital Marketing
                  </li>
                  <li className="p-0 list-none text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                    AI Using Python
                  </li>
                  <li className="p-0 list-none text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                    Data Science
                  </li>
                  <li className="p-0 list-none text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                    Graphic Design
                  </li>
                  <li className="p-0 list-none text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                    AWS
                  </li>
                  <li className="p-0 list-none text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                    C++
                  </li>
                  <li className="p-0 list-none text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                    Python
                  </li>
                  <li className="p-0 list-none text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                    MERN Stack Development
                  </li>
                </ul>
              )}
            </div>
            <li>
              <i class="fa-solid fa-magnifying-glass"></i>
            </li>
            <li>
              <button className="bg-[#f6ae28] rounded-md w-24 h-10 text-white font-semibold">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
