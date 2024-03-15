"use client";

import { Box, Button } from "@mui/material";
import { skill } from "./constant/skill";
import { colors } from "./constant";
import { use, useState } from "react";
import { mergeSx } from "./utils/mui";

interface SkillsProps {}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    minWidth: "calc(100vw - 80px)",
    backgroundColor: colors.brightGray,
    p: "40px",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    alignSelf: "flex-start",
    mb: "40px",
  },
  skillWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    border: "1px solid #f9f9f9",
    borderRadius: "4px",
    p: "20px",
    boxSizing: "border-box",
  },
  skillTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    fontSize: "20px",
    fontWeight: "bold",
  },
  skillContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    fontSize: "20px",
    height: "1em",
    transition: "all 0.3s ease-in-out",
    overflow: "hidden",
  },
};

export default function Skills(props: SkillsProps) {
  const {} = props;

  const [curIndex, setCurIndex] = useState(-1);

  const onSkillClick = (idx: number) => {
    if (curIndex == idx) setCurIndex(-1);
    else setCurIndex(idx);
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.title}>기술 스택</Box>
      {Object.entries(skill).map(([key, value], idx) => {
        return (
          <Box sx={styles.skillWrapper} key={key}>
            <Box sx={styles.skillTitle}>
              <Box>{key}</Box>
              <Button onClick={() => onSkillClick(idx)}>↓</Button>
            </Box>
            <Box
              sx={mergeSx([
                styles.skillContent,
                curIndex != idx && {
                  height: 0,
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
