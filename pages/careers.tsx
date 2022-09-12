import type { NextPage } from "next";
import { Heading1 } from "../src/components/common/typography";
import { Text, Divider, Card } from "@mantine/core";
import { ButtonMain } from "../src/components/common/Button/Button";
import CardCarrers from "../src/components/CardCarrers";
import { BiWorld } from "react-icons/bi";
import { GiBigGear, GiTeacher } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
const Careers: NextPage = () => {
  const text1 =
    "You will be involved in International projects, continuously working in connection with innovative and High-tech opportunities. We build strong relationships with both our employees and our clients. Skills such as engineering expertise, tenacity, time management and problem-solving are amongst the most important ones to be a successful ALDIA’s consultant… When you join ALDIA you decide to participate in worldwide projects for the future. This also means that you commit to a long-term collaboration with us. There are many advantages that come with working in ALDIA!In ALDIA Technologies we have embedded the International philosophy meeting corporate challenges head-on, delivering our commitments, being passionate about what we do with network connection and a strong sense of team spiri";
  return (
    <div className="bg-white">
      <div className="careerBG mt-32">
        <div className="flex justify-center pt-48 text-blue-900 flex-col items-center">
          <Heading1 fontSize="5rem">Join Our Team</Heading1>
          <Text className="text-[1.8rem] mt-12 w-[40%] text-gray-800 leading-9">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            consectetur sit molestias quae repellat fuga iure tenetur itaque
            eius. Ut!
          </Text>
          <ButtonMain>Apply Now</ButtonMain>
        </div>
      </div>
      <Divider />
      <div className="bg-[#5dc6f1] ">
        <div className="flex justify-center items-center flex-col text-white pt-48">
          <Heading1 fontSize="5rem">Why Choose Aldia</Heading1>
        </div>
        <div className="flex justify-center gap-9 mt-24 pb-48">
          <CardCarrers
            title="Global Exposure"
            icon={<BiWorld size={60} fill={"#1E3A8A"} />}
          >
            You will be involved in International projects, continuously working
            in connection with innovative and High-tech opportunities. We build
            strong relationships with both our employees and our clients. . In
            ALDIA Technologies we have embedded the International philosophy
            meeting corporate challenges head-on, delivering our commitments,
            being passionate about what we do with network connection and a
            strong sense of team spiri
          </CardCarrers>
          <CardCarrers
            icon={<IoIosPeople size={60} fill={"#1E3A8A"} />}
            title="Mobility"
          >
            Professional geographic mobility plays a major role in the growth of
            ALDIA and to achieve principles such as: Meeting: Networking with a
            wide range of different personality types, companies, job
            specifications. Languages: Opportunities to learn a new language or
            improve your English Promoting: Growth of knowledge Expertise:
            Identifying and making the most of rare and promising skills, assets
            both for the growth of ALDIA and of our clients.
          </CardCarrers>
          <CardCarrers
            icon={<GiTeacher size={60} fill={"#1E3A8A"} />}
            title="Training"
          >
            ALDIA as an Engineering Consultancy needs a continuous update and
            improvement in technical skills, in addition to our capacity to
            operate in a multicultural and International environment. We commit
            to train each of our consultant every year. The development of
            knowledge and skills is a constant and essential part of the ALDIA
            experience.
          </CardCarrers>
          <CardCarrers
            icon={<GiBigGear size={60} fill={"#1E3A8A"} />}
            title="Integration"
          >
            To ensure the best integration in ALDIA there are many points of
            information at your disposal. An integration session will be
            organized by the HR department and administration team, an employee
            handbook will be given to you when you sign your contract and you
            will be supported by your manager when you undertake your first
            steps within your new project team.
          </CardCarrers>
        </div>
      </div>
    </div>
  );
};

export default Careers;
