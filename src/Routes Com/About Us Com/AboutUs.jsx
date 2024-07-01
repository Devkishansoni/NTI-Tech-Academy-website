import React from "react";
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Image Section */}
          <div className=" flex justify-center">
            <img
              src="https://st2.depositphotos.com/4431055/11856/i/450/depositphotos_118561376-stock-photo-group-of-students-with-books.jpg"
              alt="Students" className="w-full"
            />
          </div>

          {/* Sidebar Section */}
          <div className="flex-1 mt-10 md:mt-0 md:ml-16">
            {/* Archives */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-yellow-500 mb-4">
                ARCHIVES
              </h2>
              <ul className="space-y-2">
                <li>April 2024</li>
                <li>March 2024</li>
                <li>February 2024</li>
                <li>September 2023</li>
              </ul>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-yellow-500 mb-4">
                CATEGORIES
              </h2>
              <ul className="space-y-2">
                <li>Blog</li>
                <li>Software Testing</li>
              </ul>
            </div>

            {/* Search */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-yellow-500 mb-4">SEARCH</h2>
              <div className="flex">
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-l-md w-1/2"
                  placeholder="Search..."
                />
                <button className="bg-yellow-500 text-white p-2 rounded-r-md">
                  Search
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h2 className="text-xl font-bold text-yellow-500 mb-4">
                RECENT POSTS
              </h2>
              {/* Add recent posts here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
