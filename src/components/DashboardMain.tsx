import React from "react";
import JobDashboard from "./common/Dashboard/JobDashboard";
import selection from "../assets/img/selection.svg";
import Image from "next/image";
import { Text } from "@mantine/core";
const DashboardMain = () => {
  return (
    <div className="bg-slate-50 pt-48 pb-48 mt-48">
      <div className="flex w-[95%] m-auto relative z-2  items-end gap-24  justify-center">
        <div className="w-[40%] h-[75vh]">
          <JobDashboard rounded />
        </div>
        <div className="w-[40%] items-end flex">
          <div>
            <div>
              <Text className="text-[6rem] mb-24 leading-[7rem] font-bold text-blue-900">
                Are you the right Candidate?
              </Text>
            </div>
            <Image src={selection} alt={"selection"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
