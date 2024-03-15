import { Box } from "@mui/material";
import Navigation from "../component/Navigation";
import Template from "../component/Template";
import { Roboto } from "next/font/google";
import { mergeSx } from "../utils/mui";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { usePathname } from "next/navigation";
import { pages } from "../constant";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  icon: {
    display: "flex",
    position: "fixed",
    alignItems: "center",
    top: 0,
    bottom: 0,
    zIndex: 100,
    svg: {
      fontSize: "60px",
      opacity: 1,
      "&:hover": {
        cursor: "pointer",
        transform: "scale(1.2)",
      },
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const curIdx = pages.indexOf(pathname);

  const onLeftClick = () => {
    window.location.href = pages[curIdx - 1];
  };

  const onRightClick = () => {
    window.location.href = pages[curIdx + 1];
  };

  return (
    <main className={roboto.className}>
      <title>조민준의 포트폴리오</title>
      <Box sx={styles.wrapper}>
        <Box sx={{ display: "flex", position: "relative" }}>
          <Box
            sx={mergeSx([
              styles.icon,
              { left: "30px" },
              curIdx === 0 && { opacity: 0, pointerEvents: "none" },
            ])}
          >
            <ChevronLeftIcon onClick={onLeftClick} />
          </Box>

          <Template>{children}</Template>

          <Box
            sx={mergeSx([
              styles.icon,
              { right: "30px" },
              curIdx === pages.length - 1 && {
                opacity: 0,
                pointerEvents: "none",
              },
            ])}
          >
            <ChevronRightIcon onClick={onRightClick} />
          </Box>
        </Box>
        <Navigation />
      </Box>
    </main>
  );
}
