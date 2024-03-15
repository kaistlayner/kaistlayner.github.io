"use client";

import { useEffect, useState } from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SchoolIcon from "@mui/icons-material/School";
import PoolIcon from "@mui/icons-material/Pool";
import CallIcon from "@mui/icons-material/Call";
import { pages } from "../constant";

export default function Navigation() {
  const [value, setValue] = useState(-1);

  useEffect(() => {
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
        <BottomNavigationAction label="Hobbies" icon={<PoolIcon />} />
        <BottomNavigationAction label="Contact" icon={<CallIcon />} />
      </BottomNavigation>
    </Box>
  );
}
