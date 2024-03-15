import { Box } from "@mui/material";

export default function Content({
  title,
  subTitle,
  description,
  links,
}: {
  title: string;
  subTitle: string;
  description: string;
  links?: { href: string; text: string }[];
}) {
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
      {links &&
        links.map((link) => (
          <a href={link.href} target="_blank" rel="noreferrer">
            {link.text}
          </a>
        ))}
    </Box>
  );
}
