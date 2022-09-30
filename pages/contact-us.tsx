import type { NextPage } from "next";
import { Heading1 } from "../src/components/common/typography";
import { Text } from "@mantine/core";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
} from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import ContactsUsFrom from "../src/components/ContactsUsFrom";
import { Divider } from "@mantine/core";
const ContactUs: NextPage = () => {
  return (
    <div className="bg-white">
      <div className="relative h-[90rem] bg-contactus">
        <div className="h-[60%] flex flex-col justify-end ml-36">
          <div className="flex gap-16 mb-16">
            <div className="cursor-pointer">
              <FaFacebookF size={50} />
            </div>
            <div className="cursor-pointer">
              <FaLinkedin size={50} />
            </div>
            <div className="cursor-pointer">
              <FaTwitter size={50} />
            </div>
          </div>
          <Heading1 fontSize="7rem">Contact Us</Heading1>
          <Text className="w-[40%] text-[2rem] mt-12">
            Contact us now to learn how we can help your business transform with
            modern IT services.
          </Text>
        </div>
      </div>
      <div className="w-[80%] m-auto">
        <Divider />
      </div>
      <div className="flex justify-center gap-11">
        <div className="w-[40%] mt-32 ">
          <div className="flex items-center gap-4 mb-6">
            <GiPositionMarker size={30} fill={"#5dc6f1"} />
            <Text className="text-[2rem] font-bold">
              ALDIA – United Kingdom
            </Text>
          </div>
          <div className="w-[75%]">
            <Divider />
          </div>
          <div className="mt-6 text-gray-500 text-[1.8rem] mb-10">
            <Text>Building 3, 566 Chiswick High Road</Text>
            <Text>W4 5YA London</Text>
            <Text>Phone: +44 (0) 2032 875 156</Text>
            <Text>Email: info@aldiatechnologies.com</Text>
          </div>
          {/* <div className="flex items-center gap-4 mb-6">
            <GiPositionMarker size={30} fill={"#5dc6f1"} />
            <Text className="text-[2rem] font-bold">ALDIA – Sweden</Text>
          </div>
          <div className="w-[75%]">
            <Divider />
          </div>
          <div className="mt-6 text-gray-500 text-[1.8rem] mb-10">
            <Text>Kungsgatan 8</Text>
            <Text>111 43 Stockholm</Text>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <GiPositionMarker size={30} fill={"#5dc6f1"} />
            <Text className="text-[2rem] font-bold">ALDIA – Spain</Text>
          </div> */}
          {/* <div className="w-[75%]">
            <Divider />
          </div>
          <div className="mt-6 text-gray-500 text-[1.8rem] mb-10">
            <Text>Carreta canillas 134</Text>
            <Text>28043 Madrid</Text>
            <Text>Tel: +34 917 590 286</Text>
          </div> */}
        </div>
        <div className="mt-32 pb-32 w-[30%]">
          <ContactsUsFrom />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
