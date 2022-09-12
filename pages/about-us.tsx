import type { NextPage } from "next";
import Image from "next/image";
import Aldia from "../src/assets/img/Aldia.png";
import { Heading1 } from "../src/components/common/typography";
import { Text, Avatar, Badge } from "@mantine/core";
import logo from "../src/assets/logo/Aldia-logo.png";
const AboutUs: NextPage = () => {
  return (
    <div className="pt-48 relative z-5">
      <div className="text-center">
        <Image src={logo} alt="logo" />
      </div>
      <div className="m-auto w-[50%]">
        <Text className="text-[1.5rem] pb-2">
          ALDIA Technologies is an International company active in the areas of
          Engineering Services and has been rolling out its engineering
          expertise to key players in the Automotive, Railway, Wind Turbine and
          Oil & Gas industries.
        </Text>
        <Text className="text-[1.5rem] pb-2">
          Covering individual assignments to fixed- price projects where
          specialist teams create high-tech and innovative solutions. These
          range from requirement studies to the product launch.
        </Text>
        <Text className="text-[1.5rem] pb-2">
          ALDIA Technologies works with its own group of consultants in order to
          improve quality, build stability, minimise risks and create solutions
          to quickly develop the best products.
        </Text>
      </div>
      <div className="mt-48">
        <div className="flex justify-start gap-3 mt-36">
          <div className=" border-cyan-800 border-l-4  ml-96 "></div>
          <div className="text-[5rem]  leading-[6rem] font-bold ml-4 relative tracking-wide">
            What We Offer
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-48 mb-20 mt-20">
            <div className="rounded-[8rem] bg-blue-300 w-[30rem] h-[25rem] flex flex-col justify-centers items-center shadow-md">
              <div className="w-[90%] text-center m-auto">
                <Text className="text-[2.6rem] text-gray-800 ">
                  Customer Oriented
                </Text>
                <Text className="text-[1.6rem]">
                  Advanced solutions and cost-oriented approach that supports
                  our clients to achieve their goals.
                </Text>
              </div>
            </div>
            <div className="rounded-[8rem] bg-blue-300 w-[30rem] h-[25rem] flex flex-col justify-centers items-center  shadow-md">
              <div className="w-[90%] text-center m-auto">
                <Text className="text-[2.6rem] text-gray-800 m-auto">
                  Reliability
                </Text>
                <Text className="text-[1.6rem]">
                  With over 25 years of experience working on high technological
                  projects.
                </Text>
              </div>
            </div>
          </div>
          <div className="flex gap-96">
            <div className="rounded-[8rem] bg-blue-300 w-[35rem] h-[25rem] flex flex-col justify-centers items-center  shadow-md">
              <div className="w-[90%] text-center m-auto">
                <Text className="text-[2.6rem] text-gray-800 m-auto">
                  Specialized Expertise
                </Text>
                <Text className="text-[1.6rem]">
                  Exceptional software engineering and IT technologies expertise
                  within a wide range of industries.
                </Text>
              </div>
            </div>
            <div>
              <div className="rounded-[8rem] bg-blue-300 w-[35rem] h-[25rem] flex flex-col justify-centers items-center  shadow-md">
                <div className="w-[90%] text-center m-auto ">
                  <Text className="text-[2.6rem] text-gray-800 m-auto">
                    International Presence
                  </Text>
                  <Text className="text-[1.6rem]">
                    Multinational support for customers worldwide and able to
                    provide services in Europe, Mexico and Morocco.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-48">
        <div className="flex justify-start gap-3 mt-36">
          <div className=" border-cyan-800 border-l-4  ml-96 "></div>
          <div className="text-[5rem]  leading-[6rem] font-bold ml-4 relative tracking-wide">
            Past Projects
          </div>
        </div>
      </div> */}
      <div className="flex flex-col items-center justify-center mt-48 mb-48">
        <Text className="text-[4.5rem] font-semibold text-blue-900 ">
          Our Values
        </Text>
        <div className="flex gap-12 w-[80%] items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <Avatar size={300} radius={"xl"} />
            <Heading1>Commitment</Heading1>
            <Text className="text-[1.8rem] mt-4 w-[90%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              assumenda nobis eligendi ex quas nesciunt provident optio deserunt
              ab laboriosam!
            </Text>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <Avatar size={300} radius={"xl"} />
            <Heading1>Commitment</Heading1>
            <Text className="text-[1.8rem] mt-4 w-[90%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis dolore magnam, commodi amet iste natus porro tenetur ea
              fuga odio.
            </Text>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Avatar size={300} radius={"xl"} />
            <Heading1>Commitment</Heading1>
            <Text className="text-[1.8rem] mt-4 w-[90%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic est
              amet, temporibus quod ipsam sapiente harum fugit architecto
              dignissimos porro.
            </Text>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AboutUs;
