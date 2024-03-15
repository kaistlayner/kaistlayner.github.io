"use client";

import { Box } from "@mui/material";
import { skill } from "../constant";
import { useState } from "react";
import { mergeSx } from "../utils/mui";
import { defaultStyles } from "../constant/styles";

interface SkillsProps {}

export default function Skills(props: SkillsProps) {
  const {} = props;

  const [curIndex, setCurIndex] = useState(-1);

  const onSkillClick = (idx: number) => {
    if (curIndex == idx) setCurIndex(-1);
    else setCurIndex(idx);
  };

  return (
    <Box sx={defaultStyles.wrapper}>
      <Box sx={defaultStyles.title}>기술 스택</Box>
      {Object.entries(skill).map(([key, value], idx) => {
        return (
          <Box sx={defaultStyles.listItemWrapper} key={key}>
            <Box
              sx={defaultStyles.listItemTitle}
              onClick={() => onSkillClick(idx)}
            >
              <Box>{key}</Box>
              <Box>↓</Box>
            </Box>
            <Box
              sx={mergeSx([
                defaultStyles.listItemContent,
                curIndex != idx && {
                  height: 0,
                  p: 0,
                },
              ])}
            >
              {value}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
