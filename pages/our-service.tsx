import React from "react";
import { NextPage } from "next";
import styles from "../styles/OurService.module.scss";
import { BodyText, Heading1 } from "../src/components/common/typography";
import { Divider } from "@mantine/core";
import ServiceComp from "../src/components/ServiceComp";
const OurService: NextPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.flexItem}>
          <Heading1 className={styles.title}>What we do</Heading1>
        </div>
        <div className={styles.flexItem}>
          <BodyText size="lg" className={styles.text}>
            With over 20 years of experience in specialist engineering, ALDIA
            has developed a range of flexible, bespoke and versatile offers in
            order to meet the requirements of its customers.
            <br /> ALDIA has created a personalised method based on different
            levels of solutions as individual assignments T&M, Work Unit and
            fixed-price projects.
            <br /> It can be provided on site for our customers or within ALDIA
            premises.
          </BodyText>
        </div>
      </div>
      <div className="w-[80%] m-auto">
        <Divider />
      </div>
      <div className="mb-48">
        <ServiceComp />
      </div>
    </div>
  );
};

export default OurService;
