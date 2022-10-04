import React from "react";
import { Text, Avatar } from "@mantine/core";
import { Heading1 } from "./common/typography";
const OurValues = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-48 mb-48">
      <Text className="text-[5.5rem] text-blue-900 font-bold">Our Values</Text>
      <div className="flex gap-12 w-[80%] items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Avatar size={300} radius={"xl"} />
          <Heading1>Commitment</Heading1>
          <Text className="text-[1.8rem] mt-4 w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            assumenda nobis eligendi ex quas nesciunt provident optio deserunt
            ab laboriosam!
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <Avatar size={300} radius={"xl"} />
          <Heading1>Commitment</Heading1>
          <Text className="text-[1.8rem] mt-4 w-[90%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            dolore magnam, commodi amet iste natus porro tenetur ea fuga odio.
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Avatar size={300} radius={"xl"} />
          <Heading1>Commitment</Heading1>
          <Text className="text-[1.8rem] mt-4 w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic est
            amet, temporibus quod ipsam sapiente harum fugit architecto
            dignissimos porro.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
