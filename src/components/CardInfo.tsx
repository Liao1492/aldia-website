import React from "react";
import { Button, Card, Text } from "@mantine/core";
import Image from "next/image";
import { HiOutlineInformationCircle } from "react-icons/hi";

interface IProps {
  title: string;
  titlesecond: string;
  imageSrc: any;
  text: string;
}
const CardInfo = ({ title, titlesecond, imageSrc, text }: IProps) => {
  return (
    <div className="relative card w-[30rem]">
      <Card
        shadow="sm"
        p="lg"
        radius="md"
        withBorder
        className="bg-[#5dc6f1] card__side card__side--front"
      >
        <div className="flex flex-col items-center">
          <Text className="text-[3rem] leading-[3.5rem] font-bold mb-10 text-center mt-20">
            {title} {titlesecond}
          </Text>
          <Image
            src={imageSrc}
            alt="software embedded"
            height={90}
            width={100}
          />
          {/* <Text className="text-2xl p-6 pt-14">{text}</Text> */}
        </div>
      </Card>
      <Card
        shadow="sm"
        p="lg"
        radius="md"
        withBorder
        className="bg-[#5dc6f1] max-w-[30rem] card__side card__side--back"
      >
        <div className="h-[100%] flex justify-center items-center text-justify">
          <Text className="text-3xl p-6 pt-14">{text}</Text>

          {/* <Button
            size="lg"
            className="text-3xl buttonCard"
            leftIcon={<HiOutlineInformationCircle size={18} />}
          >
            {" "}
            Learn More
          </Button> */}
        </div>
      </Card>
    </div>
  );
};

export default CardInfo;
