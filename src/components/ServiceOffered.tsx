import React from "react";
import crypto from "../assets/img/cryptocurrency.svg";
import Image from "next/image";
import medicine from "../assets/img/medicine.svg";
import stroke1 from "../assets/img/stroke.png";
import stroke2 from "../assets/img/stroke2.png";
import stroke3 from "../assets/img/stroke3.png";
import stroke4 from "../assets/img/stroke4.png";
import stroke5 from "../assets/img/stroke5.png";

import { Heading1 } from "./common/typography";
const ServiceOffered = () => {
  return (
    <div className="our-service-section">
      {" "}
      <div className="flex justify-start gap-3 mt-36">
        <div className=" border-cyan-800 border-l-4  ml-32 "></div>
        <div className="text-[6rem]  leading-[6rem] font-bold ml-4 relative">
          Services <br />
          Provided
        </div>
      </div>
      <div className="w-[100%] m-auto flex flex-col mt-32">
        <div className="flex justify-start  pl-[10rem] items-center stroke">
          <div className="backImage">
            <Image src={stroke1} alt="stroke" width={1400} height={400} />
          </div>
          <div className="pl-16">
            <Image src={medicine} alt="Hola" width={350} height={350} />
          </div>
          <div className="ml-16 w-[50%]">
            <Heading1>Biotech</Heading1>
            <p className="text-[2rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              quasi labore odit nemo rem culpa debitis, exercitationem adipisci?
              Voluptatum consectetur totam pariatur fugiat et quas hic
              molestiae, odit facere. Voluptatibus.
            </p>
          </div>
        </div>
        <div className="flex justify-end  pr-[10rem] items-center stroke">
          <div className="backImage2">
            <Image src={stroke3} alt="stroke" width={1400} height={400} />
          </div>
          <div className="ml-16 w-[50%]">
            <Heading1>Biotech</Heading1>
            <p className="text-[2rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              quasi labore odit nemo rem culpa debitis, exercitationem adipisci?
              Voluptatum consectetur totam pariatur fugiat et quas hic
              molestiae, odit facere. Voluptatibus.
            </p>
          </div>
          <div className="pl-10">
            <Image src={medicine} alt="Hola" width={350} height={400} />
          </div>
        </div>
        <div className="flex justify-start  pl-[10rem] items-center ">
          <div className="backImage">
            <Image src={stroke4} alt="stroke" width={1400} height={400} />
          </div>
          <div className="pl-16">
            <Image src={medicine} alt="Hola" width={350} height={350} />
          </div>
          <div className="ml-16 w-[50%]">
            <Heading1>Biotech</Heading1>
            <p className="text-[2rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              quasi labore odit nemo rem culpa debitis, exercitationem adipisci?
              Voluptatum consectetur totam pariatur fugiat et quas hic
              molestiae, odit facere. Voluptatibus.
            </p>
          </div>
        </div>
        <div className="flex justify-end  pr-[10rem] items-center ">
          <div className="backImage2">
            <Image src={stroke5} alt="stroke" width={1400} height={400} />
          </div>
          <div className="ml-16 w-[50%]">
            <Heading1>Biotech</Heading1>
            <p className="text-[2rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              quasi labore odit nemo rem culpa debitis, exercitationem adipisci?
              Voluptatum consectetur totam pariatur fugiat et quas hic
              molestiae, odit facere. Voluptatibus.
            </p>
          </div>
          <div className="pl-10">
            <Image src={medicine} alt="Hola" width={350} height={350} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOffered;
