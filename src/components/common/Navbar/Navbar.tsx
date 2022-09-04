import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../../assets/logo/Aldia-logo.png";
import Link from "next/link";
import { Burger } from "@mantine/core";
import NavbarOpened from "./NavbarOpened";
import { useInView } from "react-intersection-observer";

const Navbar = () => {
  const [pressed, setPressed] = useState(false);
  const [firstRenderObs, setFirstRenderObs] = useState(true);
  const [ref1, inView1] = useInView({
    root: null,
    threshold: 0.1,
  });
  useEffect(() => {
    if (inView1 && firstRenderObs) setFirstRenderObs(false);
  }, [inView1, firstRenderObs]);
  useEffect(() => {
    if (pressed) {
      document.querySelector(".navbar-opened")?.classList.add("zIndex");
    } else {
      let timer = setTimeout(() => {
        document.querySelector(".navbar-opened")?.classList.remove("zIndex");
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [pressed]);
  useEffect(() => {
    if (firstRenderObs) return;
    if (!inView1) {
      document
        .querySelector(".burger-nav")
        ?.classList.add("burger-nav__opened");
      document.querySelector(".navbar")?.classList.add("navbar__none");
    } else if (!pressed) {
      document
        .querySelector(".burger-nav")
        ?.classList.remove("burger-nav__opened");
      document.querySelector(".navbar")?.classList.remove("navbar__none");
    }
  }, [inView1, pressed]);
  const handlePressed = () => {
    if (!pressed) {
      document.querySelector(".item-a")?.classList.add("item-a__opened");
      document.querySelector(".item-b")?.classList.add("item-b__opened");
      document.querySelector(".item-d")?.classList.add("item-d__opened");

      document.querySelector(".item-c")?.classList.add("item-c__opened");
    } else {
      document.querySelector(".item-a")?.classList.remove("item-a__opened");
      document.querySelector(".item-b")?.classList.remove("item-b__opened");
      document.querySelector(".item-c")?.classList.remove("item-c__opened");
      document.querySelector(".item-d")?.classList.remove("item-d__opened");
    }

    setPressed((o) => !o);
  };
  return (
    <>
      <div
        className="flex items-center justify-between font-bold navbar"
        ref={ref1}
      >
        <div className="pl-5 pt-2 flex items-center">
          <Link href="/">
            <Image
              src={Logo}
              width={202}
              height={70}
              style={{ cursor: "pointer" }}
            />
          </Link>
          <div className="flex gap-8 pl-20">
            <div className="nav-link">
              <Link href="/about-us">About Us</Link>
            </div>
            <div className="nav-link">
              <Link href="/market">Market</Link>
            </div>
            <div className="nav-link">
              <Link href="/it">IT</Link>
            </div>
            <div className="nav-link">
              <Link href="/our-services">Our Services</Link>
            </div>
            <div className="nav-link">
              <Link href="/dashboard">Job Dashboard</Link>
            </div>
          </div>
        </div>

        <div className="flex pr-10 gap-14">
          <Link href="/">Carrers</Link>
          <Link href="/">Contact US</Link>
        </div>
      </div>
      <div>
        <div className="navbar-menu">
          <div className="burger-nav">
            <Burger opened={pressed} onClick={handlePressed} />
          </div>
        </div>
        <NavbarOpened />
      </div>
    </>
  );
};

export default Navbar;
