"use client";

import { useLayoutEffect, useState } from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SchoolIcon from "@mui/icons-material/School";
import CallIcon from "@mui/icons-material/Call";

const pages = ["/about", "/skills", "/projects", "/contact"];

export default function Navigation() {
  const [value, setValue] = useState(-1);

  useLayoutEffect(() => {
    setValue(pages.indexOf(window.location.pathname));
  }, []);

  return (
    <Box sx={{ width: "100%", position: "fixed", top: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
          window.location.href = pages[newValue];
        }}
      >
        <BottomNavigationAction label="About" icon={<PersonIcon />} />
        <BottomNavigationAction label="Skills" icon={<EngineeringIcon />} />
        <BottomNavigationAction label="Projects" icon={<SchoolIcon />} />
        <BottomNavigationAction label="Contact" icon={<CallIcon />} />
      </BottomNavigation>
    </Box>
  );
}
