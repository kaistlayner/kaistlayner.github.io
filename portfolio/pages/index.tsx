import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function Home() {
  useEffect(() => {
    window.location.href = "/about";
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
}
