import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DashboardMain from "../src/components/DashboardMain";
import { GetInTouch } from "../src/components/GetInTouch";
import Hero from "../src/components/Hero";
import { OurSolutions } from "../src/components/OurSolutions";
import ServiceOff from "../src/components/ServiceOff";
import OurPartners from "../src/components/OurPartners";
import OurValues from "../src/components/OurValues";
import AboutUsComp from "../src/components/AboutUs";
const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <AboutUsComp />
      <OurSolutions />
      {/* <ServiceOffered /> */}
      {/* <ServiceOff /> */}
      {/* <AboutUs /> */}
      <OurValues />
      {/* <DashboardMain /> */}
      <OurPartners />
      <GetInTouch />
    </div>
  );
};

export default Home;
