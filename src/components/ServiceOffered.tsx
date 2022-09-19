import React, { useEffect } from "react";
import Image from "next/image";
import medicine from "../assets/img/medicine.svg";
import stroke1 from "../assets/img/stroke-1.png";
import stroke3 from "../assets/img/stroke3-1.png";
import stroke4 from "../assets/img/stroke4-1.png";
import stroke5 from "../assets/img/stroke5-1.png";
import { useInView } from "react-intersection-observer";
import { Heading1 } from "./common/typography";
const ServiceOffered = () => {
  const [ref1, inView1] = useInView({
    root: null,
    threshold: 1,
  });
  const [ref2, inView2] = useInView({
    root: null,
    threshold: 0.1,
  });
  const [ref3, inView3] = useInView({
    root: null,
    threshold: 0.9,
  });
  const [ref4, inView4] = useInView({
    root: null,
    threshold: 0.9,
  });
  console.log(inView2);
  console.log(inView3);

  console.log(inView4);

  useEffect(() => {
    // if (inView1) {
    //   document.querySelector("#firstCont")?.classList.add("stroke--active1");
    //   document.querySelector("#firstCont")?.classList.remove("stroke--left");
    // } else if (inView2) {
    //   document.querySelector("#secondCont")?.classList.add("stroke--active2");
    //   document.querySelector("#secondCont")?.classList.remove("stroke--right");
    // } else if (inView3) {
    //   document.querySelector("#thirdCont")?.classList.add("stroke--active1");
    //   document.querySelector("#thirdCont")?.classList.remove("stroke--left");
    // } else if (inView4) {
    //   document.querySelector("#fourthCont")?.classList.add("stroke--active2");
    //   document.querySelector("#fourthCont")?.classList.remove("stroke--right");
    // }
    if (inView1) {
      setTimeout(() => {
        document.querySelector("#firstCont")?.classList.add("stroke--active1");
        document.querySelector("#firstCont")?.classList.remove("stroke--left");
      }, 1);
      setTimeout(() => {
        document.querySelector("#secondCont")?.classList.add("stroke--active2");
        document
          .querySelector("#secondCont")
          ?.classList.remove("stroke--right");
      }, 100);
      setTimeout(() => {
        document.querySelector("#thirdCont")?.classList.add("stroke--active1");
        document.querySelector("#thirdCont")?.classList.remove("stroke--left");
      }, 300);
      setTimeout(() => {
        document.querySelector("#fourthCont")?.classList.add("stroke--active2");
        document
          .querySelector("#fourthCont")
          ?.classList.remove("stroke--right");
      }, 500);
    }
  }, [inView1, inView2, inView3, inView4]);

  return (
    <div className="our-service-section bg-slate-50 ">
      {" "}
      <div className="flex justify-start gap-3 mt-36">
        <div className=" border-cyan-800 border-l-4  ml-32 "></div>
        <div
          className="text-[6rem]  leading-[6rem] font-bold ml-4 relative tracking-wide"
          ref={ref1}
        >
          Services <br />
          Provided
        </div>
      </div>
      <div className="w-[100%] m-auto flex flex-col mt-32">
        <div
          id="firstCont"
          ref={ref2}
          className="flex justify-start  pl-[10rem] items-center stroke stroke--left"
        >
          <div className="backImage">
            <Image src={stroke1} alt="stroke" width={1800} height={500} />
          </div>
          <div className="pl-16">
            <Image src={medicine} alt="Hola" width={350} height={350} />
          </div>
          <div className="ml-16 w-[50%] text__service">
            <Heading1>Biotech</Heading1>
            <p className="text-[2rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              quasi labore odit nemo rem culpa debitis, exercitationem adipisci?
              Voluptatum consectetur totam pariatur fugiat et quas hic
              molestiae, odit facere. Voluptatibus.
            </p>
          </div>
        </div>
        <div ref={ref3}>
          <div
            id="secondCont"
            className="flex justify-end  pr-[10rem] items-center stroke stroke--right"
          >
            <div className="backImage2">
              <Image src={stroke3} alt="stroke" width={1800} height={500} />
            </div>
            <div className="ml-16 w-[50%] text__service">
              <Heading1>Biotech</Heading1>
              <p className="text-[2rem]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                quasi labore odit nemo rem culpa debitis, exercitationem
                adipisci? Voluptatum consectetur totam pariatur fugiat et quas
                hic molestiae, odit facere. Voluptatibus.
              </p>
            </div>
            <div className="pl-10">
              <Image src={medicine} alt="Hola" width={350} height={350} />
            </div>
          </div>
        </div>
        <div ref={ref4}>
          <div
            id="thirdCont"
            className="flex justify-start  pl-[10rem] items-center stroke stroke--left"
          >
            <div className="backImage">
              <Image src={stroke4} alt="stroke" width={1800} height={500} />
            </div>
            <div className="pl-16">
              <Image src={medicine} alt="Hola" width={350} height={350} />
            </div>
            <div className="ml-16 w-[50%] text__service">
              <Heading1>Biotech</Heading1>
              <p className="text-[2rem]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                quasi labore odit nemo rem culpa debitis, exercitationem
                adipisci? Voluptatum consectetur totam pariatur fugiat et quas
                hic molestiae, odit facere. Voluptatibus.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            id="fourthCont"
            className="flex justify-end  pr-[10rem] items-center stroke stroke--right"
          >
            <div className="backImage2">
              <Image src={stroke5} alt="stroke" width={1800} height={500} />
            </div>
            <div className="ml-16 w-[50%] text__service">
              <Heading1>Biotech</Heading1>
              <p className="text-[2rem]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                quasi labore odit nemo rem culpa debitis, exercitationem
                adipisci? Voluptatum consectetur totam pariatur fugiat et quas
                hic molestiae, odit facere. Voluptatibus.
              </p>
            </div>
            <div className="pl-10">
              <Image src={medicine} alt="Hola" width={350} height={350} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOffered;
