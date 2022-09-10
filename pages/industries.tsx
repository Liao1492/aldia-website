import type { NextPage } from "next";
import mainImage from "../src/assets/img/industries.svg";
import Image from "next/image";
import { Heading1 } from "../src/components/common/typography";
import { Text } from "@mantine/core";
import IndustryCard from "../src/components/IndustryCard";
const Market: NextPage = () => {
  return (
    <div className="pt-48 w-[90%] m-auto relative z-5 mb-10">
      <div className="flex justify-center">
        <Image src={mainImage} alt="collaboration image" height={300} />
      </div>
      <div className="flex justify-center mt-32 flex-col items-center">
        <Heading1 fontSize="5rem">Industries</Heading1>
        <div className="text-[1.8rem] w-[50%] text-center mt-6">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            delectus ratione deleniti vitae repudiandae pariatur dolor corporis
            at aperiam amet rerum illo, minima quia temporibus iste porro
            necessitatibus voluptatem voluptas maiores deserunt voluptatum
            velit? Exercitationem aut deserunt at expedita sit!
          </Text>
        </div>
      </div>
      <div className="flex justify-center gap-10 mb-10 mt-48">
        <IndustryCard />
        <IndustryCard />
      </div>
      <div className="flex justify-center gap-10 mb-48">
        <IndustryCard />
        <IndustryCard />
      </div>
    </div>
  );
};

export default Market;