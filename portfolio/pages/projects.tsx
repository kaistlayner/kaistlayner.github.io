"use client";

import { Box } from "@mui/material";
import {
  memorableLectures,
  lastSemesterLectures,
  militaryServiceContents,
} from "../constant";
import { useState } from "react";
import { mergeSx } from "../utils/mui";
import { defaultStyles } from "../constant/styles";

interface ProjectsProps {}

export default function Projects(props: ProjectsProps) {
  const {} = props;

  const [curIndex, setCurIndex] = useState(-1);

  const onProjectClick = (idx: number) => {
    if (curIndex == idx) setCurIndex(-1);
    else setCurIndex(idx);
  };

  return (
    <Box sx={defaultStyles.wrapper}>
      <Box sx={defaultStyles.title}>프로젝트</Box>
      {[
        ...militaryServiceContents,
        ...memorableLectures,
        ...lastSemesterLectures,
      ].map(({ title, subTitle, description }, idx) => {
        return (
          <Box sx={defaultStyles.listItemWrapper} key={title}>
            <Box
              sx={defaultStyles.listItemTitle}
              onClick={() => onProjectClick(idx)}
            >
              <Box>{`${title} (${subTitle})`}</Box>
              <Box>↓</Box>
            </Box>
            <Box
              sx={mergeSx([
                defaultStyles.listItemContent,
                curIndex != idx && {
                  fontSize: 0,
                  p: 0,
                },
              ])}
            >
              {description}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
