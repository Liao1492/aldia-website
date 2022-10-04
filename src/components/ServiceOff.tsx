import React, { useEffect } from "react";
import Image from "next/image";
import { Text } from "@mantine/core";
import { ButtonMain } from "./common/Button/Button";
import medicine from "../assets/img/med.svg";
import transport from "../assets/img/transport.svg";
import finance from "../assets/img/finance.svg";
import biotech from "../assets/img/biomedical.svg";
import factory from "../assets/img/factory.svg";
import retails from "../assets/img/retail.svg";

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
      case 4:
        n = "fifth";
        break;
      case 5:
        n = "sixth";
        break;
    }
    if (inView) {
      console.log(`line-service__${n}`);
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
  const [ref5, inView5] = useInView({
    root: null,
    threshold: 0.1,
  });
  const [ref6, inView6] = useInView({
    root: null,
    threshold: 0.1,
  });
  const inViewArray = [inView1, inView2, inView3, inView4, inView5, inView6];
  useEffect(() => {
    const allContainer = document.querySelectorAll(".blur-div");

    allContainer.forEach((el, i) => {
      blurAnimation(el, inViewArray[i]);
      progressAnimation(i, inViewArray[i]);
    });
  }, [inViewArray]);
  return (
    <>
      <div className="mt-48 relative pb-48">
        <div className="line-service "></div>
        {/* <div className="box-service blurred blur-div ">
          <div className="box-service__left w-[40%]">
            <div>
              <Image src={biotech} alt="medicine" />
            </div>
          </div>
          <div className="box-service__middle"></div>
          <div ref={ref1} className="box-service__right w-[40%] pl-32">
            <Heading1 fontSize="4.2rem">Remote Surgery </Heading1>
            <Text className="w-[90%] text-[1.8rem] leading-9 mt-16 mb-16">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              eaque totam voluptatem itaque, vel debitis quod ullam aliquid,
              illum possimus harum explicabo quisquam porro, unde veritatis modi
              recusandae corrupti? Molestiae illum eveniet qui dolorum tenetur?
              Perspiciatis ea maiores necessitatibus debitis! Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Vero at molestias illo,
              explicabo magnam molestiae, impedit inventore aperiam, modi animi
              itaque quae dolores earum maxime? Quas assumenda deleniti labore
              nihil?
            </Text>
            <ButtonMain>Learn More</ButtonMain>
          </div>
        </div> */}
        <div ref={ref1} className="box-service blurred blur-div">
          <div className="box-service__right w-[40%] pl-32 ">
            <Heading1 lineHeight="5rem" fontSize="4.2rem">
              Retail And <br />
              B2B Business{" "}
            </Heading1>
            <Text className="w-[90%] text-[1.8rem] leading-9 mt-16 mb-16 text-justify">
              With economic obstacles continuously altering the commercial
              retail landscape, it is beneficial to have an adviser than can
              navigate through unexpected events. Here at ALDIA out team
              provides clear, trusted advice across the full retail spectrum. We
              offer our services in market research, concept planning, advice on
              development in current market position, market-entry studies,
              competitive analysis and branding.
            </Text>
            <ButtonMain>Learn More</ButtonMain>
          </div>
          <div className="box-service__middle"></div>

          <div className="box-service__left w-[40%]">
            <div>
              <Image src={retails} alt="medicine" />
            </div>
          </div>
        </div>
        <div ref={ref2} className="box-service blurred blur-div ">
          <div className="box-service__left w-[40%]">
            <div>
              <Image src={transport} alt="medicine" />
            </div>
          </div>
          <div className="box-service__middle"></div>

          <div className="box-service__right w-[40%] pl-32 ">
            <Heading1 fontSize="4.2rem">Transport </Heading1>
            <Text className="w-[90%] text-[1.8rem] leading-9 mt-16 mb-16 text-justify">
              ALDIA is constantly searching for more environment friendly ways
              of transportation to reduce the overall carbon footprint being
              released into the atmosphere. Low carbon transport and safety are
              the two main priorities we focus on at ALDIA. We also aim to
              connect people to smarter ways of transport solutions. Smart
              transport systems bring in greater control and automation to road
              networks. This eases congestions and overall carbon emissions in
              addition, it allows for a faster response.
            </Text>
            <ButtonMain>Learn More</ButtonMain>
          </div>
        </div>
        <div ref={ref3} className="box-service blurred blur-div ">
          <div className="box-service__right w-[40%] pl-32 ">
            <Heading1 lineHeight="5rem" fontSize="4.2rem">
              Smart Manufacturing{" "}
            </Heading1>
            <Text className="w-[90%] text-[1.8rem] leading-9 mt-16 mb-16 text-justify">
              Traditional manufacturing facilities have limited flexibility, are
              outdated and require lots of manual operations. These are
              frequently time consuming and uneconomical as labor can be quite
              expensive.
              <br />
              <br />
              With ALDIA´s smart manufacturing consultancy services. We use the
              industry 4.0 technologies to ensure that our customers production
              facility is fully equipped which results in significant increase
              in productivity and efficiency gains.
            </Text>
            <ButtonMain>Learn More</ButtonMain>
          </div>
          <div className="box-service__middle"></div>

          <div className="box-service__left w-[40%]">
            <div>
              <Image src={factory} alt="medicine" />
            </div>
          </div>
        </div>
        <div ref={ref4} className="box-service blurred blur-div ">
          <div className="box-service__left w-[40%]">
            <div>
              <Image src={biotech} alt="medicine" />
            </div>
          </div>
          <div className="box-service__middle"></div>

          <div className="box-service__right w-[40%] pl-32 ">
            <Heading1 lineHeight="5rem" fontSize="4.2rem">
              Biomedical Technologies{" "}
            </Heading1>
            <Text className="w-[90%] text-[1.8rem] leading-9 mt-16 mb-16 text-justify">
              Healthcare is an always expanding industry that faces new
              challenges daily. This creates a global need for access to reliant
              healthcare. With such a large demand that increases with the
              rising population, it is important to cater to this problem with
              care and the correct utilization of resources. <br />
              <br />
              For the reasons mentioned, there is no one who understands this
              and applies it to their values better than ALDIA does. We
              recognize the difficulties the healthcare industry possesses and
              navigate around these issues by resolving them through innovation
              and sustainability.
            </Text>
            <ButtonMain>Learn More</ButtonMain>
          </div>
        </div>
        <div ref={ref5} className="box-service blurred blur-div ">
          <div className="box-service__right w-[40%] pl-32 ">
            <Heading1 fontSize="4.2rem">Finance </Heading1>
            <Text className="w-[90%] text-[1.8rem] leading-9 mt-16 mb-16 text-justify">
              ALDIA´s financial services offer much more than just the bottom
              line of total earnings and losses. Our wealth management experts
              are passionate and have deep knowledge in the financial industry.
              We are expanding rapidly due to the exceptional service our
              experts provide, and the unique insights offered.
              <br />
              <br />
              We focus on audits, tax services through customer experience,
              cyber security, digital innovation and regulatory solutions. We
              also have a deep understanding of expansion into new markets,
              especially in Europe.
            </Text>
            <ButtonMain>Learn More</ButtonMain>
          </div>
          <div className="box-service__middle"></div>

          <div className="box-service__left w-[40%]">
            <div>
              <Image src={finance} alt="medicine" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceOff;
