import { Box } from "@mui/material";

export default function Content({
  title,
  description,
}: Readonly<{ title: string; description: string }>) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </Box>
  );
}
