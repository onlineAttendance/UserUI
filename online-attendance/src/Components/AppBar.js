import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import { Book, CheckCircle, Login, AccountCircle } from "@mui/icons-material";

const Appbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isAttendance, setIsAttendance] = useState(false);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleAttendance = () => {
    setIsAttendance(!isAttendance);
  };

  return (
    <Box sx={{display:'flex', justifyContent:'space-between'}}>
      <AppBar >
        <Toolbar>
          {isAttendance ? (
            <Box sx={{flexGrow:1, display:'flex', flexDirection:'row'}}>
              <IconButton color="inherit" onClick={handleAttendance}>
                <CheckCircle />
              </IconButton>
              <Typography variant="h6">출석체크</Typography>
            </Box>
          ) : (
            <Box sx={{flexGrow:1, display:'flex', flexDirection:'row'}}>
              <IconButton color="inherit" onClick={handleAttendance}>
                <Book />
              </IconButton>
              <Typography variant="h6">오늘의 말씀</Typography>
            </Box>
          )}

          {isLogin ? (
            <Box sx={{flexGrow:0}}>
              <IconButton color="inherit">
                <Login></Login>
              </IconButton>
            </Box>
          ) : (
            <Box sx={{flexGrow:0}}>
              <IconButton color="inherit">
                <AccountCircle></AccountCircle>
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
