import type { NextPage } from "next";
import mainImage from "../src/assets/img/industries.svg";
import Image from "next/image";
import { Heading1 } from "../src/components/common/typography";
import { Text } from "@mantine/core";
import ServiceOff from "../src/components/ServiceOff";
import SwitchButton from "../src/components/common/Button/SwitchButton";
import { CSSTransition } from "react-transition-group";
import { useState, useRef, useEffect } from "react";

const Market: NextPage = () => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const nodeRefLeft = useRef(null);
  const nodeRefRight = useRef(null);
  useEffect(() => {
    setShowLeft(true);
  }, []);
  return (
    <div className="pt-48 w-[90%] m-auto relative z-5 pb-10">
      <div className="flex justify-center">
        <Image src={mainImage} alt="collaboration image" height={300} />
      </div>
      <div className="flex jusxtify-center mt-32 flex-col items-center">
        <Heading1 fontSize="5rem" className="text-blue-900">
          Industries
        </Heading1>
        <div className="text-[1.8rem] w-[50%] text-center mt-6">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            delectus ratione deleniti vitae repudiandae pariatur dolor corporis
            at aperiam amet rerum illo, minima quia temporibus iste porro
            necessitatibus voluptatem voluptas maiores deserunt voluptatum
            velit? Exercitationem aut deserunt at expedita sit!
          </Text>
        </div>
      </div>
      <div className="mid-flex">
        <SwitchButton
          onClickLeft={() => {
            setShowLeft(true);
            setShowRight(false);
          }}
          onClickRight={() => {
            setShowRight(true);
            setShowLeft(false);
          }}
        />
      </div>
      <CSSTransition
        in={showLeft}
        nodeRef={nodeRefLeft}
        timeout={300}
        classNames="visible"
        unmountOnExit
      >
        <div id="eng" ref={nodeRefLeft} className="blocks">
          <ServiceOff />
        </div>
      </CSSTransition>
      <CSSTransition
        in={showRight}
        nodeRef={nodeRefRight}
        timeout={300}
        classNames="visible"
        unmountOnExit
      >
        <div id="it" ref={nodeRefRight} className="blocks">
          <ServiceOff />
        </div>
      </CSSTransition>
      {/* <div className="flex justify-center gap-10 mb-10 mt-48">
        <IndustryCard title="Remote Surgery" />
        <IndustryCard title="Healthcare" />
      </div>
      <div className="flex justify-center gap-10 mb-10">
        <IndustryCard title="Transport" />
        <IndustryCard title="Smart Manufacturing" />
      </div>
      <div className="flex justify-center gap-10 mb-48">
        <IndustryCard title="Biomedical Technologies" />
        <IndustryCard title="Finance" />
      </div> */}
    </div>
  );
};

export default Market;
