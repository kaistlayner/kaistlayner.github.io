import { Box } from "@mui/material";

export default function Content({
  title,
  subTitle,
  description,
}: Readonly<{ title: string; subTitle: string; description?: string }>) {
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
      <p>{subTitle}</p>
      <p>{description}</p>
    </Box>
  );
}
