import React from "react";
import { Text } from "@mantine/core";
const AboutUsComp = () => {
  return (
    <div className="mt-96 mb-96">
      <div className="flex justify-start gap-3 mt-36 mb-32">
        <div className=" border-cyan-800 border-l-4  ml-96 "></div>
        <div className="text-[5rem]  leading-[6rem] font-bold ml-4 relative tracking-wide text-blue-900">
          What We Are
        </div>
      </div>
      <div className="w-[50%] m-auto aboutInfo">
        <div className="corner">
          <Text className="p-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            repudiandae corporis delectus non iure, recusandae perspiciatis
            optio ullam. Dolore mollitia repudiandae iure impedit atque dolorem?
            Repellat perspiciatis adipisci eveniet dolorem!
          </Text>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComp;
