import React, { useEffect } from "react";
import Service from "./Service";
import Image from "next/image";
import { Text } from "@mantine/core";
import { ButtonMain } from "./common/Button/Button";
import biotech from "../assets/img/medicine.svg";
import { Heading1 } from "./common/typography";
import { useInView } from "react-intersection-observer";
const ServiceOff = () => {
  const blurAnimation = (component: any, inView: any) => {
    if (inView) {
      component.classList.remove("blurred");
      component.classList.add("blurAnimation");
    }
  };

  const progressAnimation = (position: number, inView: any) => {
    let n;
    switch (position) {
      case 0:
        n = "first";
        break;
      case 1:
        n = "second";
        break;
      case 2:
        n = "third";
        break;
      case 3:
        n = "fourth";
        break;
    }
    if (inView) {
      document
        ?.querySelector(".line-service")
        ?.classList.add(`line-service__${n}`);
    }
  };
  const [ref1, inView1] = useInView({
    root: null,
    threshold: 0.1,
  });
  const [ref2, inView2] = useInView({
    root: null,
    threshold: 0.1,
  });
  const [ref3, inView3] = useInView({
    root: null,
    threshold: 0.1,
  });
  const [ref4, inView4] = useInView({
    root: null,
    threshold: 0.1,
  });
  const inViewArray = [inView1, inView2, inView3, inView4];
  useEffect(() => {
    const allContainer = document.querySelectorAll(".blur-div");

    allContainer.forEach((el, i) => {
      blurAnimation(el, inViewArray[i]);
      progressAnimation(i, inViewArray[i]);
    });
  }, [inViewArray]);
  return (
    <div className="mt-96 relative">
      <div className="line-service"></div>
      <div className="box-service blurred blur-div ">
        <div className="box-service__left w-[40%]">
          <div>
            <Image src={biotech} alt="medicine" />
          </div>
        </div>
        <div className="box-service__middle"></div>
        <div ref={ref1} className="box-service__right w-[40%] pl-32">
          <Heading1 fontSize="5rem">Biotech </Heading1>
          <Text className="w-[90%] text-[1.8rem] leading-9 mt-16 mb-16">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            eaque totam voluptatem itaque, vel debitis quod ullam aliquid, illum
            possimus harum explicabo quisquam porro, unde veritatis modi
            recusandae corrupti? Molestiae illum eveniet qui dolorum tenetur?
            Perspiciatis ea maiores necessitatibus debitis! Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Vero at molestias illo,
            explicabo magnam molestiae, impedit inventore aperiam, modi animi
            itaque quae dolores earum maxime? Quas assumenda deleniti labore
            nihil?
          </Text>
          <ButtonMain>Learn More</ButtonMain>
        </div>
      </div>
      <div ref={ref2} className="box-service blurred blur-div">
        <div className="box-service__right w-[40%] pl-32 ">
          <Heading1 fontSize="5rem">Biotech </Heading1>
          <Text className="w-[90%] text-[1.8rem] leading-9 mt-16 mb-16">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            eaque totam voluptatem itaque, vel debitis quod ullam aliquid, illum
            possimus harum explicabo quisquam porro, unde veritatis modi
            recusandae corrupti? Molestiae illum eveniet qui dolorum tenetur?
            Perspiciatis ea maiores necessitatibus debitis! Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Vero at molestias illo,
            explicabo magnam molestiae, impedit inventore aperiam, modi animi
            itaque quae dolores earum maxime? Quas assumenda deleniti labore
            nihil?
          </Text>
          <ButtonMain>Learn More</ButtonMain>
        </div>
        <div className="box-service__middle"></div>

        <div className="box-service__left w-[40%]">
          <div>
            <Image src={biotech} alt="medicine" />
          </div>
        </div>
      </div>
      <div ref={ref3} className="box-service blurred blur-div ">
        <div className="box-service__left w-[40%]">
          <div>
            <Image src={biotech} alt="medicine" />
          </div>
        </div>
        <div className="box-service__middle"></div>

        <div className="box-service__right w-[40%] pl-32 ">
          <Heading1 fontSize="5rem">Biotech </Heading1>
          <Text className="w-[90%] text-[1.8rem] leading-9 mt-16 mb-16">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            eaque totam voluptatem itaque, vel debitis quod ullam aliquid, illum
            possimus harum explicabo quisquam porro, unde veritatis modi
            recusandae corrupti? Molestiae illum eveniet qui dolorum tenetur?
            Perspiciatis ea maiores necessitatibus debitis! Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Vero at molestias illo,
            explicabo magnam molestiae, impedit inventore aperiam, modi animi
            itaque quae dolores earum maxime? Quas assumenda deleniti labore
            nihil?
          </Text>
          <ButtonMain>Learn More</ButtonMain>
        </div>
      </div>
      <div ref={ref4} className="box-service blurred blur-div ">
        <div className="box-service__right w-[40%] pl-32 ">
          <Heading1 fontSize="5rem">Biotech </Heading1>
          <Text className="w-[90%] text-[1.8rem] leading-9 mt-16 mb-16">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            eaque totam voluptatem itaque, vel debitis quod ullam aliquid, illum
            possimus harum explicabo quisquam porro, unde veritatis modi
            recusandae corrupti? Molestiae illum eveniet qui dolorum tenetur?
            Perspiciatis ea maiores necessitatibus debitis! Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Vero at molestias illo,
            explicabo magnam molestiae, impedit inventore aperiam, modi animi
            itaque quae dolores earum maxime? Quas assumenda deleniti labore
            nihil?
          </Text>
          <ButtonMain>Learn More</ButtonMain>
        </div>
        <div className="box-service__middle"></div>

        <div className="box-service__left w-[40%]">
          <div>
            <Image src={biotech} alt="medicine" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOff;