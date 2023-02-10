import React, { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Check, Book } from "@mui/icons-material";

const BottomNav = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box  sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="오늘의 말씀" value="todayWord" icon={<Book />} />
        <BottomNavigationAction label="출석 체크" value="attendance" icon={<Check />} />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNav;
