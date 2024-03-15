"use client";

import { Box } from "@mui/material";
import { useState } from "react";
import { mergeSx } from "../../utils/mui";
import { defaultStyles } from "../../constant/styles";
import { HistoryObject } from "../../constant";

const styles = {
  links: {
    mt: "20px",
    width: "100%",
    a: {
      display: "block",
      color: "blue",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
};

export default function ListItems({
  title,
  contents,
}: {
  title: string;
  contents: HistoryObject[];
}) {
  const [curIndex, setCurIndex] = useState(-1);

  const onItemClick = (idx: number) => {
    if (curIndex == idx) setCurIndex(-1);
    else setCurIndex(idx);
  };

  return (
    <Box sx={defaultStyles.wrapper}>
      <Box sx={defaultStyles.title}>{title}</Box>
      {contents.map(({ title, subTitle, description, links }, idx) => {
        return (
          <Box sx={defaultStyles.listItemWrapper} key={title}>
            <Box
              sx={defaultStyles.listItemTitle}
              onClick={() => onItemClick(idx)}
            >
              <Box>
                {title}
                {subTitle && (
                  <Box sx={{ mt: "0.5em", fontSize: "0.7em" }}>{subTitle}</Box>
                )}
              </Box>

              <Box>{curIndex != idx ? "↓" : "↑"}</Box>
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
              {links && (
                <Box sx={styles.links}>
                  {links.map(({ href, text }, idx) => {
                    return (
                      <Box key={idx} sx={{ display: "flex", color: "blue" }}>
                        ▶&nbsp;&nbsp;
                        <a href={href} target="_blank">
                          {text}
                        </a>
                      </Box>
                    );
                  })}
                </Box>
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}