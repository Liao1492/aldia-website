import React from "react";
import { BodyText, Heading1 } from "./common/typography";
import { ButtonMain } from "./common/Button/Button";
const Hero = () => {
  return (
    <>
      <div className="background-image">
        <div className="hero-section ml-36 ">
          <div className="flex mt-36">
            <Heading1
              fontSize="6.6rem"
              className="w-[40%]"
              style={{ lineHeight: "7.6rem" }}
              fontWeight="900"
            >
              Engineering
              <br /> Delivery Innovation
            </Heading1>
          </div>
          <div className="w-[40%] mt-5">
            <BodyText
              stress
              size="lg"
              fontWeight="400"
              fontSize="2rem"
              lineHeight="2.5rem"
            >
              ALDIA Technologies is an International Company specialising in
              Engineering Services. <br />
              Company Motto or Slogan if possible
            </BodyText>
            <ButtonMain>Learn More</ButtonMain>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
