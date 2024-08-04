import React from "react";

export default function SidebarSec() {
  return (
      <>
         
      <div className="flex-1 w-1/4 pt-20 md:mt-0 md:ml-16 space-y-3">
        {/* Archives */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-yellow-500 mb-4">ARCHIVES</h2>
          <ul className="space-y-2">
            <li>April 2024</li>
            <li>March 2024</li>
            <li>February 2024</li>
            <li>September 2023</li>
          </ul>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-yellow-500 mb-4">CATEGORIES</h2>
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
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-yellow-500 mb-4">
            RECENT POSTS
          </h2>
          <p className="text-zinc-500 text-xs hover:text-red-900">
            “NTI Tech Academy reveals 2024’s top tech skills!”
          </p>
          <p className="text-zinc-500 text-xs hover:text-red-900">
            The Beginner’s Guide to Programming Languages: Which One First
          </p>
          <p className="text-zinc-500 text-xs hover:text-red-900">
            From Bootcamp to Career: Mastering the Tech Interview
          </p>
          <p className="text-zinc-500 text-xs hover:text-red-900">
            Future of Tech Education with NTI Tech Academy Mastering Excel: The
            Key to Proper Data Formatting and Analysis
          </p>
              </div>
              <div className="space-y-2">
          <h2 className="text-xl font-bold text-yellow-500 mb-4">
            RECENT COMMENTS
          </h2>
          <p className="text-zinc-500 text-xs hover:text-red-900">
          No comments to show...
          </p>
          
        </div>
      </div>
    </>
  );
}
