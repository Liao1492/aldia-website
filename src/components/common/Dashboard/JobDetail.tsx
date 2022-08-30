import React, { useState } from "react";
import { Box, Avatar, Button } from "@mantine/core";
import jobPos from "../../../assets/img/jobpos.png";
import { BodyText } from "../typography";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const JobDetail = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: "pointer",
        "&:hover": {
          borderColor: theme.colors.blue[2],
        },
      })}
      className="job-boxes"
    >
      <div className="job-content flex justify-between">
        <div className="flex flex-col">
          <div className="flex gap-5 items-end">
            <Avatar src={"img/jobpos.png"} />
            <div>
              <p className="text-[1.4rem] font-bold">UI/UX Designer</p>
              <p className="text-lg font-medium">
                Building 3, 566 Chiswick High Road, W4 5YA London
              </p>
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            <Box className="text-lg bg-gray-200 p-2 rounded-lg text-red-500">
              Full Time
            </Box>
            <Box className="text-lg bg-gray-200 p-2 rounded-lg text-cyan-900">
              Freshman
            </Box>
          </div>
        </div>
        <div className="flex flex-col">
          <Button
            className="button-fav"
            onClick={() => {
              setClicked((prev) => !prev);
            }}
          >
            {!clicked && <AiOutlineHeart fill="gray" size={20} />}
            {clicked && <AiFillHeart fill="red" size={20} />}
          </Button>
          <div className="text-center">
            <p className="text-[1.5rem]">4d</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default JobDetail;
