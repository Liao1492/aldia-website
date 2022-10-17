import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../../assets/logo/Aldia-logo.png";
import Link from "next/link";
import { Burger } from "@mantine/core";
import NavbarOpened from "./NavbarOpened";
import { useInView } from "react-intersection-observer";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
  const [pressed, setPressed] = useState(false);
  const [firstRenderObs, setFirstRenderObs] = useState(true);
  const [ourService, setOurService] = useState(false);
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
    if (ourService) {
      document
        .querySelector(".dropDown")
        ?.classList.remove("dropDown--inactive");
      document
        .querySelector(".dropdownMenu")
        ?.classList.add("dropdownMenu--active");
      document.querySelector(".arrow")?.classList.add("arrowUp");
      document.querySelector(".arrow")?.classList.remove("arrowDown");
    } else {
      document
        .querySelector(".dropdownMenu")
        ?.classList.add("dropdownMenu--inactive");
      document
        .querySelector(".dropdownMenu")
        ?.classList.remove("dropdownMenu--active");
      document.querySelector(".arrow")?.classList.remove("arrowUp");
      document.querySelector(".arrow")?.classList.add("arrowDown");
    }
  }, [ourService]);
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
  }, [inView1, pressed, firstRenderObs]);
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
        className="flex items-center justify-between font-bold navbar "
        ref={ref1}
      >
        <div className="pl-5 pt-2 flex items-center">
          <Link href="/">
            <div>
              <Image
                src={Logo}
                width={202}
                height={70}
                style={{ cursor: "pointer" }}
              />
            </div>
          </Link>
          <div className="flex gap-8 pl-20">
            {/* <div
              className="nav-link"
              onClick={() => {
                setOurService(false);
              }}
            >
              <Link href="/about-us">About Us</Link>
            </div> */}

            <div
              className="nav-link"
              // onClick={() => {
              //   setOurService(false);
              // }}
            >
              <Link href="/industries">Industries</Link>
            </div>
            <div>
              <div
                className="nav-link"
                // onClick={() => {
                //   setOurService((prev) => !prev);
                // }}
              >
                <div className="flex items-center">
                  <Link href="/our-service"> Our Services</Link>
                  {/* <div className="arrowDown arrow">
                    <MdOutlineKeyboardArrowDown size={30} />
                  </div> */}
                </div>
              </div>
              {/* <div
                className={`flex flex-col absolute bg-[ #ccffee] w-[100%] pl-5 dropdownMenu mt-4`}
              >
                <div className="subLink">
                  <Link href={"/biotech"}>Service 1</Link>
                </div>
                <div className="subLink">
                  <Link href={"/biotech"}>Service 2</Link>
                </div>
                <div className="subLink">
                  <Link href={"/biotech"}>Service 3</Link>
                </div>
              </div> */}
            </div>
            <div
              className="nav-link"
              // onClick={() => {
              //   setOurService(false);
              // }}
            >
              <Link href="/dashboard">Job Dashboard</Link>
            </div>
            <div
              className="nav-link"
              // onClick={() => {
              //   setOurService(false);
              // }}
            >
              <Link href="/careers">Careers</Link>
            </div>
          </div>
        </div>

        <div className="flex pr-10 gap-14">
          {/* <Link href="/careers">Careers</Link> */}
          <Link href="/contact-us">Contact US</Link>
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
