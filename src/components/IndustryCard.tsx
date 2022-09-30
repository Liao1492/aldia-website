import React from "react";
import { BackgroundImage, Title } from "@mantine/core";
import factoryPic from "../assets/img/factory.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

interface IProps {
  title: string;
}
const IndustryCard = ({ title }: IProps) => {
  return (
    <div className="relative z-5 cardIndustry">
      <div className="h-[100%] flex flex-col justify-end pb-10 pl-10 text-white relative z-5 contentIndustry">
        <Title className="mb-2 cursor-pointer hover:text-[#5dc6f1]">
          {title}
        </Title>
        <p className="text-white text-[1.8rem] leading-9 mb-6 w-[75%]  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          harum.
        </p>
        <a
          className="text-[2rem] learn-more flex items-center gap-2 w-fit"
          href="#"
        >
          Learn more <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  );
};

export default IndustryCard;
