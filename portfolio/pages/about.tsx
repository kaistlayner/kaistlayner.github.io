import { Box } from "@mui/material";
import { colors } from "../constant";

interface AboutProps {}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: colors.navy,
    color: "white",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    m: "40px",
  },
  content: {
    width: "100%",
    maxWidth: "1200px",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    margin: "0.5em",
  },
};

export default function About(props: AboutProps) {
  const {} = props;

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.title}>조민준 입니다.</Box>
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
  );
}
