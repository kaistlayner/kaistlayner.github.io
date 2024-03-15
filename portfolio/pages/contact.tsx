import { Box } from "@mui/material";
import { defaultStyles } from "../constant/styles";
import { mergeSx } from "../utils/mui";

interface ContactProps {}

const styles = {
  title: mergeSx([
    defaultStyles.listItemTitle,
    { "&:hover": { cursor: "unset" } },
  ]),
};

export default function Contact(props: ContactProps) {
  const {} = props;

  return (
    <Box sx={defaultStyles.wrapper}>
      <Box sx={defaultStyles.title}>Contact</Box>
      <Box sx={defaultStyles.listItemWrapper}>
        <Box sx={styles.title}>Email</Box>
        <Box sx={defaultStyles.listItemContent}>layner@kaist.ac.kr</Box>
      </Box>
      <Box sx={defaultStyles.listItemWrapper}>
        <Box sx={styles.title}>phone</Box>
        <Box sx={defaultStyles.listItemContent}>010-2995-8501</Box>
      </Box>
    </Box>
  );
}
