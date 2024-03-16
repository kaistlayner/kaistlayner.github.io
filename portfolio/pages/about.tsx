import { Box } from "@mui/material";
import { colors } from "../constant";
import Image from "next/image";

const styles = {
  wrapper: {
    display: "flex",
    backgroundColor: colors.navy,
    minHeight: "100vh",
    minWidth: "calc(100vw - 240px)",
  },
  aboutWrapper: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
    p: "60px",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    pb: "40px",
  },
  content: {
    width: "100%",
    display: "flex",
    fontSize: "20px",
    py: "10px",
  },
  imageWrapper: {
    width: "86.07%",
    position: "relative",
  },
};

export default function About() {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.imageWrapper}>
        <Image
          src="/images/work.jpg"
          alt=""
          fill
          style={{ objectFit: "cover", pointerEvents: "none" }}
          priority
        />
      </Box>
      <Box sx={styles.aboutWrapper}>
        <Box sx={styles.title}>조민준입니다.</Box>
        <Box sx={styles.content}>
          프론트엔드 개발자로 2년, 백엔드 개발자로 1년의 경험이 있습니다.
        </Box>
        <Box sx={styles.content}>
          새로운 기술을 배우고, 이를 통해 문제를 해결하는 것을 좋아합니다.
        </Box>
        <Box sx={styles.content}>
          업무에 있어서 협업의 중요성을 잘 알고, 주로 팀에서 팀원 간의 소통을
          원활하게 만드는 역할을 합니다.
        </Box>
      </Box>
    </Box>
  );
}
