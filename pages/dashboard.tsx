import type { NextPage } from "next";
import { Box, Stack, Input } from "@mantine/core";
import JobDetail from "../src/components/common/Dashboard/JobDetail";
import { FiSearch } from "react-icons/fi";
import JobInformation from "../src/components/JobInformation";
const Dashboard: NextPage = () => {
  return (
    <div className="pt-48 w-[90%] m-auto relative z-5 mb-10">
      <div className="flex bg-[#f1f3f5] pt-10 pb-10 rounded-3xl">
        <Box
          sx={(theme) => ({
            backgroundColor: theme.colors.gray[2],
            padding: theme.spacing.xl,
            borderRadius: theme.spacing.xl,
          })}
          className="w-[55%] m-auto overflow-scroll h-[90vh]"
        >
          <Input
            icon={<FiSearch size={16} />}
            placeholder="Search by job title"
            radius={"xl"}
            className="w-[70%] m-auto mb-12"
          />
          <Stack
            sx={(theme) => ({
              borderRadius: theme.radius.md,
            })}
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
        <Box
          sx={(theme) => ({
            backgroundColor: theme.colors.gray[1],
          })}
          className="w-[55rem]"
        >
          <JobInformation />
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
