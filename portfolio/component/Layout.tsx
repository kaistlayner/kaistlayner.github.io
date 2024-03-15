import { Box } from "@mui/material";
import Navigation from "../component/Navigation";
import Template from "../component/Template";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <title>조민준의 포트폴리오</title>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Template>{children}</Template>
        <Navigation />
      </Box>
    </>
  );
}
