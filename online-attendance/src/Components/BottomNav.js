import React, { useState, useContext, useEffect } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Check, Book } from "@mui/icons-material";
import AuthContext from "../store/auth-context";
import ModalContext from "../store/modal-context";

const BottomNav = () => {
  const [value, setValue] = useState('todayWord');
  const actx = useContext(AuthContext);
  const mctx = useContext(ModalContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    setValue(actx.isTodayWord ? "todayWord" : "attendance");
  }, []);
  useEffect(() => {
    setValue(actx.isTodayWord ? "todayWord" : "attendance");
  }, [actx.isTodayWord]);
  
  return (
    <Box  sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="오늘의 말씀" value="todayWord" icon={<Book />} onClick={actx.onTodayWord}/>
        <BottomNavigationAction label="출석 체크" value="attendance" icon={<Check />} onClick={actx.onAttendance}/>
      </BottomNavigation>
    </Box>
  );
};

export default BottomNav;
