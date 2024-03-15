"use client";

import { Box } from "@mui/material";
import { useState } from "react";
import { mergeSx } from "../../utils/mui";
import { HistoryObject, defaultStyles, colors } from "../../constant";
import Image from "next/image";

const styles = {
  links: {
    display: "flex",
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
  imageWrapper: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContents: "center",
    alignItems: "center",
    transition: "all 0.1s ease-in-out",
  },
};

export default function ListItems({
  title,
  contents,
}: {
  title: string;
  contents: HistoryObject[];
}) {
  const [curIndex, setCurIndex] = useState(0);

  const onItemClick = (idx: number) => {
    if (curIndex == idx) setCurIndex(-1);
    else setCurIndex(idx);
  };

  return (
    <Box sx={defaultStyles.wrapper}>
      <Box sx={defaultStyles.title}>{title}</Box>
      {contents.map(({ title, subTitle, description, links }, idx) => {
        return (
          <Box
            sx={mergeSx([
              defaultStyles.listItemWrapper,
              curIndex == idx && {
                backgroundColor: "white",
                boxShadow: `0 0 10px white`,
              },
            ])}
            key={title}
          >
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
              sx={[
                defaultStyles.listItemContent,
                curIndex != idx && {
                  fontSize: 0,
                  p: 0,
                },
              ]}
            >
              {description}
              {links && (
                <Box sx={styles.links}>
                  {links.map(({ href, text, image }) => {
                    return (
                      <Box key={text} sx={styles.imageWrapper}>
                        {image && (
                          <Image
                            src={image}
                            alt=""
                            width={400}
                            height={curIndex == idx ? 300 : 0}
                          />
                        )}
                        <Box sx={{ display: "flex", color: "blue" }}>
                          ▶&nbsp;&nbsp;
                          <a href={href} target="_blank">
                            {text}
                          </a>
                        </Box>
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
