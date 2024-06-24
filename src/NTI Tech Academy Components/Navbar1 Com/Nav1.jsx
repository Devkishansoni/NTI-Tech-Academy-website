import React from "react";

export default function Nav1() {
  return (
    <>
      <div className="w-full bg-[#fe9001] px-8 py-2 flex justify-between">
        {/* icon container */}
        <div className="flex gap-8 text-white">
          <a href="https://www.facebook.com/newtalentinfotech" target="_blank">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="https://x.com/i/flow/login?redirect_after_login=%2Fnewtalentinfo"
            target="_blank"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/newtalentinfotech/"
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/new-talent-infotech"
            target="_blank"
          >
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/new-talent-infotech"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        {/* Detail Container for NTIS */}
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-2 text-white text-sm">
            <i class="fa-solid fa-mobile-screen shadow-lg"></i>
            <h1>07662-462289 ,9174253016 || </h1>
          </div>
          <div className="flex items-center gap-2 text-white text-sm">
            <i class="fa-solid fa-message shadow-lg"></i>{" "}
            <h1>info@ntitechacademy.com || </h1>
          </div>
          <div className="flex items-center gap-2 text-white text-sm">
            <i class="fa-solid fa-location-dot shadow-lg"></i>
            <h1> LIG - 2/21/422, Nehru Ngar, Rewa MP - 486001</h1>
          </div>
        </div>
      </div>
    </>
  );
}
