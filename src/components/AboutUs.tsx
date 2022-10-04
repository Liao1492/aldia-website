import React from "react";
import { Text } from "@mantine/core";
const AboutUsComp = () => {
  return (
    <div className="mt-96 mb-96">
      <div className="flex justify-start gap-3 mt-36 mb-32">
        <div className=" border-cyan-800 border-l-4  ml-96 "></div>
        <div className="text-[5rem]  leading-[6rem] font-bold ml-4 relative tracking-wide text-blue-900">
          Who We Are
        </div>
      </div>
      <div className="w-[50%] m-auto aboutInfo">
        <div className="corner">
          <Text className="p-16">
            ALDIA Technologies is an International company active in the areas
            of Engineering Services and has been rolling out its engineering
            expertise. Covering individual assignments to fixed- price projects
            where specialist teams create high-tech and innovative solutions.
            These range from requirement studies to the product launch. ALDIA
            Technologies works with its own group of consultants in order to
            improve quality, build stability, minimise risks and create
            solutions to quickly develop the best products.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComp;
