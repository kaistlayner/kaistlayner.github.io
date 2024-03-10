import { Box } from "@mui/material";
import Content from "./Content";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  content: {
    width: "100%",
    maxWidth: "1200px",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "10px",
    p: "40px",
    m: "40px",
  },
};

export default function Home() {
  return (
    <Box sx={styles.wrapper}>
      <h1>조민준의 포트폴리오</h1>제 이름은..
      <Box sx={styles.contentWrapper}>
        <Content title="코난" description="탐정이죠" />
        <Content title="민준" description="똑똑이죠" />
        <Content title="민준" description="기엽죠" />
      </Box>
      <Box sx={styles.contentWrapper}>
        밤양갱은 무엇인가요?
        <Content title="밤양갱" description="밤양갱은 밤양갱입니다." />
        <Content title="달디달고 달디단" description="밤양갱이야~" />
      </Box>
    </Box>
  );
}
