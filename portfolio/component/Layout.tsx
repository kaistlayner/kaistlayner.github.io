import type { Metadata } from "next";
import { Box } from "@mui/material";

import Navigation from "../component/Navigation";
import Template from "../component/Template";

export const metadata: Metadata = {
  title: "조민준의 포트폴리오",
  description: "조민준의 포트폴리오입니다.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
      </Box>
      <Navigation />
    </>
  );
}
