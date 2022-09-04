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
      <Heading1 className="tracking-wide " fontSize="4.5rem">
        Our Focus
      </Heading1>
      <Heading3 fontWeight="500" fontSize="2.5rem" className="mt-8">
        We offer state-of-the-art specialized solutions for high-tech projects
      </Heading3>

      <div className="flex items-center gap-14 mt-32">
        <CardInfo
          text={text1}
          title={"Embeded"}
          titlesecond={"Software"}
          imageSrc={softEmb}
        />
        <CardInfo
          text={text1}
          title={"Hardware"}
          titlesecond={"Development"}
          imageSrc={hardware}
        />
        <CardInfo
          text={text1}
          title={"Software"}
          titlesecond={"Development"}
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
