import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
} from "@mui/material";
import { Book, CheckCircle, Login, AccountCircle } from "@mui/icons-material";
import NewModal from "../UI/NewModal";
import AuthContext from "../store/auth-context";
import ModalContext from "../store/modal-context";

const Appbar = () => {
  const actx = useContext(AuthContext);
  const mctx = useContext(ModalContext);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <AppBar>
          <Toolbar>
            {actx.isTodayWord ? (
              <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row" }}>
              <IconButton color="inherit" onClick={actx.onAttendance}>
                <Book />
              </IconButton>
              <Typography variant="h6">오늘의 말씀</Typography>
            </Box>
            ) : (
              
              <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row" }}>
              <IconButton color="inherit" onClick={actx.onTodayWord}>
                <CheckCircle />
              </IconButton>
              <Typography variant="h6">출석체크</Typography>
            </Box>
            )}

            {actx.isLoggedIn ? (
              <Box sx={{ flexGrow: 0 }}>
                <IconButton onClick={mctx.onHandleOpen}color="inherit">
                  <AccountCircle></AccountCircle>
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <IconButton onClick={mctx.onHandleOpen} color="inherit">
                  <Login></Login>                  
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <NewModal>
      </NewModal>
    </>
  );
};

export default Appbar;
