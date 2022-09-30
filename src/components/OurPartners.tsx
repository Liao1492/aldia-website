import React, { useRef } from "react";
import { Heading1 } from "./common/typography";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import Autoplay, {
  AutoplayType,
  AutoplayOptionsType,
} from "embla-carousel-autoplay";
import microsoft from "../assets/partners/microsoft.png";
import aws from "../assets/partners/aws.svg.png";
import oracle from "../assets/partners/oracle.png";
import autosar from "../assets/partners/autosar.svg.png";

const OurPartners = () => {
  const autoplay = useRef(Autoplay({ delay: 1600 }));
  return (
    <div className="mt-48 mb-48">
      <div className="w-[100%] flex justify-center">
        <Heading1 className="text-blue-900" fontSize="4.5rem">
          Our Partners
        </Heading1>
      </div>
      <div className="relative z-5 mt-20 w-[80%] m-auto">
        <Carousel
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          withControls={false}
          controlSize={50}
          slideSize="33.333333%"
          align="center"
          loop
        >
          <Carousel.Slide className="flex justify-center">
            <div className="image-partner flex items-center justify-center w-[70%] h-[100%]">
              <Image src={microsoft} alt="microsoft" />
            </div>
          </Carousel.Slide>
          <Carousel.Slide className="flex justify-center">
            <div className="image-partner flex items-center justify-center w-[70%] h-[100%] m-auto">
              <Image src={aws} alt="microsoft" />
            </div>
          </Carousel.Slide>
          <Carousel.Slide className="flex justify-center">
            <div className="image-partner flex items-center justify-center w-[70%] h-[100%]">
              <Image src={oracle} alt="microsoft" />
            </div>
          </Carousel.Slide>
          <Carousel.Slide className="flex justify-center">
            <div className="image-partner flex items-center justify-center w-[70%] h-[100%]">
              <Image src={autosar} alt="microsoft" />
            </div>
          </Carousel.Slide>
          {/* <Carousel.Slide className="flex justify-center">
            <div className="flex items-center justify-center w-[70%] h-[100%]">
              <Image src={autosar} alt="microsoft" />
            </div>
          </Carousel.Slide> */}
        </Carousel>
      </div>
    </div>
  );
};

export default OurPartners;
