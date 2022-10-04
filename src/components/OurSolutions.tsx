import React from "react";
import { Heading1, Heading3 } from "./common/typography";
import { Card, Text } from "@mantine/core";
import Image from "next/image";
import softEmb from "../assets/img/embedded.svg";
import hardware from "../assets/img/hardware.svg";
import software from "../assets/img/software.svg";
import CardInfo from "./CardInfo";
import { text } from "stream/consumers";
export const OurSolutions = () => {
  const text1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delenitirerum harum optio quibusdam, facilis illum ex magni magnam voluptatum in cum quia numquam perferendis! Quasi.`;
  return (
    <div className="flex justify-center mt-32 flex-col items-center">
      <Heading1 className="tracking-wide text-blue-900" fontSize="5.5rem">
        Our Focus
      </Heading1>
      <Heading3 fontWeight="500" fontSize="2.5rem" className="mt-16">
        We offer state-of-the-art specialized solutions for high-tech projects
      </Heading3>

      <div className="flex items-center gap-14 mt-32">
        <CardInfo
          text={
            "With the future heading in a more digital environment, let ALDIA help you embrace it in the correct manner. Our experts have experience throughout the whole embedded software process. We ensure the most suitable strategy is carried out utilizing the most cost-effective approach.           "
          }
          title={"Embeded"}
          titlesecond={"Software"}
          imageSrc={softEmb}
        />
        <CardInfo
          text={`The strategy for digital transformation isn´t a new concept yet many businesses lack in this area and have a long way to go to optimize performance. It is crucial for companies in today’s competitive environment to take action and gain any slight advantage possible. Appling digital technologies and ways of working at scale has many benefits. It embraces a cultural change, creates continual learning, is sustainable and cost effective. `}
          title={"Electronic Product"}
          titlesecond={"Development"}
          imageSrc={hardware}
        />
        <CardInfo
          text={
            "The strategy for digital transformation isn´t a new concept yet many businesses lack in this area and have a long way to go to optimize performance. It is crucial for companies in today’s competitive environment to take action and gain any slight advantage possible. Appling digital technologies and ways of working at scale has many benefits. It embraces a cultural change, creates continual learning, is sustainable and cost effective. "
          }
          title={"Digital"}
          titlesecond={"Transformation"}
          imageSrc={software}
        />
        {/* <Card
          shadow="sm"
          p="lg"
          radius="md"
          withBorder
          className="bg-[#5dc6f1] max-w-[30rem]"
        >
          <div className="flex flex-col items-center ">
            <Text className="text-[2.6rem] font-bold mb-10 text-center">
              Embeded
              <br /> Software
            </Text>
            <Image
              src={softEmb}
              alt="software embedded"
              height={70}
              width={100}
            />
            <Text className="text-2xl p-6 pt-14">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              rerum harum optio quibusdam, facilis illum ex magni magnam
              voluptatum in cum quia numquam perferendis! Quasi.
            </Text>
          </div>
        </Card> */}
      </div>
    </div>
  );
};
