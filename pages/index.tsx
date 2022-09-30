import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DashboardMain from "../src/components/DashboardMain";
import { GetInTouch } from "../src/components/GetInTouch";
import Hero from "../src/components/Hero";
import { OurSolutions } from "../src/components/OurSolutions";
import ServiceOff from "../src/components/ServiceOff";
import OurPartners from "../src/components/OurPartners";
const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <OurSolutions />
      {/* <ServiceOffered /> */}
      <ServiceOff />
      <DashboardMain />
      <OurPartners />
      <GetInTouch />
    </div>
  );
};

export default Home;
