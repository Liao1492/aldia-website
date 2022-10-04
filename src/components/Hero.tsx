import React from "react";
import { BodyText, Heading1 } from "./common/typography";
import { ButtonMain } from "./common/Button/Button";
import Image from "next/image";
import mainImage from "../assets/img/imageHero.svg";
const Hero = () => {
  return (
    <>
      <div className="background-image">
        <div className="hero-section ml-52 ">
          <div>
            <div className="flex mt-36">
              <Heading1
                fontSize="6rem"
                className="w-[40%]"
                style={{ lineHeight: "7.6rem" }}
                fontWeight="800"
              >
                Engineering
                <br /> Delivery Innovation
              </Heading1>
            </div>
            <div className="w-[80%] mt-5">
              <BodyText
                stress
                size="lg"
                fontWeight="500"
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
          <div className="imageHero">
            <Image src={mainImage} alt="homepage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
