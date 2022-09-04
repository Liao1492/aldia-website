import React from "react";
import { Box, Text, Button, Divider, List } from "@mantine/core";
import { Heading2, Heading3, Heading4 } from "./common/typography";
import { IoPaperPlaneOutline } from "react-icons/io5";
const JobInformation = () => {
  return (
    <div>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.gray[1],
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
        })}
      >
        <Heading2 className="mb-5">UI/UX Designer</Heading2>
        <Text className="text-[1.6rem] mb-3">
          Building 3, 566 Chiswick High Road, W4 5YA London
        </Text>
        <Text className="text-[1.4rem] mb-5">€2000-€3000 a Month</Text>
        <Button
          rightIcon={<IoPaperPlaneOutline />}
          className="bg-blue-400 mb-5"
        >
          Apply Now
        </Button>
        <Divider my="xs" label="Job Descriptions" labelPosition="center" />
      </Box>
      <div className="pl-12 pr-12">
        <Heading2 className={"mb-6"}>Job Details</Heading2>
        <Heading3>Salary</Heading3>
        <Text className="text-[1.4rem] mb-5">€2000-€3000 a Month</Text>
        <Heading3>Job Type</Heading3>
        <Text className="text-[1.4rem] mb-14">Full Time</Text>
        <Divider my="xs" label="Qualifications" labelPosition="center" />
        <List listStyleType="disc" className="text-[1.4rem]">
          <List.Item>Figma Proficiency</List.Item>
          <List.Item>Spanish Proficiency</List.Item>
          <List.Item>5 years experience of UI/UX</List.Item>
        </List>
        <Divider my="xs" />
        <Heading3>Full Job Descriptions</Heading3>
        <Text className="text-[1.4rem] mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi harum
          fugiat numquam, earum mollitia omnis tempora facere nobis praesentium
          perspiciatis?
        </Text>
      </div>
    </div>
  );
};

export default JobInformation;
