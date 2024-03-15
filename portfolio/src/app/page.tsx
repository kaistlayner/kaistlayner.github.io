import { Box } from "@mui/material";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
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
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  );
}
