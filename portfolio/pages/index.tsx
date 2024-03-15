import { useLayoutEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function Home() {
  useLayoutEffect(() => {
    window.location.href = "/about";
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
}
