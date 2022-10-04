import React from "react";
import JobDashboard from "../Dashboard/JobDashboard";
import { Heading2 } from "../typography";
const NavbarOpened = () => {
  return (
    <div className="w-[100%] h-[100%] navbar-opened">
      <div className="item-a justify-self-stretch overflow-hidden">
        <div className="w-[100%] h-[100%] flex items-center">
          <ul className="link-list pl-28">
            <li className="link-item">Home</li>
            <li className="link-item">Industries</li>
            <li className="link-item">Our Services</li>
            <li className="link-item">Careers</li>
          </ul>
        </div>
      </div>
      <div className="item-b">
        <div className="back-image"></div>
        <div className="nav-dash">
          <JobDashboard />
        </div>
      </div>
      <div className="item-c"></div>
      <div className="item-d"></div>
    </div>
  );
};

export default NavbarOpened;
