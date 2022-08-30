import React from "react";
import JobDashboard from "./common/Dashboard/JobDashboard";
import selection from "../assets/img/selection.svg";
import Image from "next/image";
const DashboardMain = () => {
  return (
    <div className="flex w-[95%] m-auto relative z-2 mt-96 items-end gap-10 mb-96">
      <div className="w-[50%] h-[75vh]">
        <JobDashboard rounded />
      </div>
      <div className="h-[65vh] items-end flex">
        <Image src={selection} alt={"selection"} />
      </div>
    </div>
  );
};

export default DashboardMain;
