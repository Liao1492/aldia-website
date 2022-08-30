import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DashboardMain from "../src/components/DashboardMain";
import { GetInTouch } from "../src/components/GetInTouch";
import Hero from "../src/components/Hero";
import { OurSolutions } from "../src/components/OurSolutions";
import ServiceOffered from "../src/components/ServiceOffered";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <OurSolutions />
      <ServiceOffered />
      <DashboardMain />

      <GetInTouch />
    </div>
  );
};

export default Home;
