import React from "react";
import { Heading1, Heading3 } from "./common/typography";
import { Card, Text } from "@mantine/core";
import Image from "next/image";
import softEmb from "../assets/img/embedded.svg";
import hardware from "../assets/img/hardware.svg";
import software from "../assets/img/software.svg";
export const OurSolutions = () => {
  return (
    <div className="flex justify-center mt-32 flex-col items-center">
      <Heading1 className="tracking-wide " fontSize="4.5rem">
        Our Focus
      </Heading1>
      <Heading3 fontWeight="500" fontSize="2.5rem" className="mt-8">
        We offer state-of-the-art specialized solutions for high-tech projects
      </Heading3>

      <div className="flex justify-center gap-32 mt-32 ">
        <Card
          shadow="sm"
          p="lg"
          radius="md"
          withBorder
          className="bg-[#5dc6f1] min-w-[25rem]"
        >
          <div className="flex flex-col items-center text-center">
            <Text className="text-[2.6rem] font-bold mb-10">
              Embeded
              <br /> Software
            </Text>
            <Image
              src={softEmb}
              alt="software embedded"
              height={70}
              width={100}
            />
          </div>
        </Card>
        <Card
          shadow="sm"
          p="lg"
          radius="md"
          withBorder
          className="bg-[#5dc6f1]  min-w-[25rem]"
        >
          <div className="flex flex-col items-center">
            <Text className="text-[2.6rem] font-bold mb-10 text-center">
              Hardware
              <br /> Development
            </Text>
            <Image src={hardware} alt="hardware" height={70} width={100} />
          </div>
        </Card>

        <Card
          shadow="sm"
          p="lg"
          radius="md"
          withBorder
          className="bg-[#5dc6f1]  min-w-[25rem]"
        >
          <div className="flex flex-col items-center text-center mb-10">
            <Text className="text-[2.6rem] font-bold mb-10">
              Software
              <br /> Development
            </Text>
            <Image src={software} alt="software" height={70} width={100} />
          </div>
        </Card>
      </div>
    </div>
  );
};
