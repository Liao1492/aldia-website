import React from "react";
import Image from "next/image";
import { Box, Button, Stack } from "@mantine/core";
import JobDetail from "./JobDetail";
import { Heading2 } from "../typography";
import { HiArrowNarrowRight } from "react-icons/hi";
import logo from "../../../assets/logo/Aldia-logo.png";
interface IProps {
  rounded?: boolean;
}
const JobDashboard = ({ rounded = false }: IProps) => {
  return (
    <>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.gray[2],
          borderTopLeftRadius: theme.radius.xl,
          borderTopRightRadius: theme.radius.xl,
          padding: theme.spacing.md,
        })}
      >
        <div className="flex justify-between items-center">
          {!rounded && (
            <Image src={logo} alt="Aldia Logo" width={140} height={50} />
          )}

          <Button
            className="text-black btn-dash"
            rightIcon={<HiArrowNarrowRight />}
          >
            Go to Dashboard
          </Button>
        </div>
      </Box>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.gray[2],
        })}
        className="h-[90%] rounded-b-[3rem]"
      >
        <Box
          sx={(theme) => ({
            backgroundColor: theme.colors.gray[3],
            padding: theme.spacing.xl,
            borderRadius: theme.spacing.xl,
          })}
          className="w-[85%] m-auto overflow-scroll"
        >
          <Stack
            sx={(theme) => ({
              borderRadius: theme.radius.md,
            })}
            className={`overflow-scroll ${rounded ? "h-[55vh]" : "h-[45vh]"}`}
          >
            <JobDetail />
            <JobDetail />
            <JobDetail />

            <JobDetail />
            <JobDetail />
            <JobDetail />
            <JobDetail />
            <JobDetail />
            <JobDetail />
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default JobDashboard;
