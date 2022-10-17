import React from "react";
import { Text } from "@mantine/core";
import { Heading1 } from "./common/typography";
const ServiceComp = () => {
  return (
    <div>
      <div className="flex justify-start gap-3 mt-36">
        <div className=" border-cyan-800 border-l-4  ml-96 "></div>
        <div className="text-[5rem]  leading-[6rem] font-bold ml-4 relative tracking-wide">
          <Heading1>What We Offer</Heading1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-48 mb-20 mt-20">
          <div className="rounded-[8rem] bg-blue-300 w-[30rem] h-[25rem] flex flex-col justify-centers items-center shadow-md">
            <div className="w-[90%] text-center m-auto">
              <Text className="text-[2.6rem] text-gray-800 ">
                Customer Oriented
              </Text>
              <Text className="text-[1.6rem]">
                Advanced solutions and cost-oriented approach that supports our
                clients to achieve their goals.
              </Text>
            </div>
          </div>
          <div className="rounded-[8rem] bg-blue-300 w-[30rem] h-[25rem] flex flex-col justify-centers items-center  shadow-md">
            <div className="w-[90%] text-center m-auto">
              <Text className="text-[2.6rem] text-gray-800 m-auto">
                Reliability
              </Text>
              <Text className="text-[1.6rem]">
                With over 25 years of experience working on high technological
                projects.
              </Text>
            </div>
          </div>
        </div>
        <div className="flex gap-96">
          <div className="rounded-[8rem] bg-blue-300 w-[35rem] h-[25rem] flex flex-col justify-centers items-center  shadow-md">
            <div className="w-[90%] text-center m-auto">
              <Text className="text-[2.6rem] text-gray-800 m-auto">
                Specialized Expertise
              </Text>
              <Text className="text-[1.6rem]">
                Exceptional software engineering and IT technologies expertise
                within a wide range of industries.
              </Text>
            </div>
          </div>
          <div>
            <div className="rounded-[8rem] bg-blue-300 w-[35rem] h-[25rem] flex flex-col justify-centers items-center  shadow-md">
              <div className="w-[90%] text-center m-auto ">
                <Text className="text-[2.6rem] text-gray-800 m-auto">
                  International Presence
                </Text>
                <Text className="text-[1.6rem]">
                  Multinational support for customers worldwide and able to
                  provide services in Europe, Mexico and Morocco.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComp;
