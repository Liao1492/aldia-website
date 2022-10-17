import React, { Children } from "react";
import { Text } from "@mantine/core";
import { text } from "stream/consumers";
interface IProps {
  children: React.ReactNode;
  icon: JSX.Element;
  title: string;
}
const CardCarrers = ({ children, icon, title }: IProps) => {
  return (
    <div className="cardCareers">
      <div className="cardCareers--cover">
        <div className="mt-36 text-center w-[100%]">
          <div className="mb-12 flex justify-center">
            {/* <BiWorld size={60} fill={"#1E3A8A"} /> */}
            {icon}
          </div>
          <Text className="text-[4rem] font-bold text-blue-900 leading-[4rem]">
            {title}
          </Text>
        </div>
      </div>

      <div className="cardCareers--inside text-[1.8rem] p-12 flex items-center  ">
        <Text>{children}</Text>
      </div>
    </div>
  );
};

export default CardCarrers;
