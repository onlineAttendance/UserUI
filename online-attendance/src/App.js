import React, { useState, useContext } from "react";
import { Box, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import AppBar from "./Components/AppBar";
import BottomNav from "./Components/BottomNav";
import Container from "@mui/material/Container";
import MainContainer from "./UI/MainContainer";
import Attendance from "./Content/Attendance";
import Question from "./Components/Question";
import TodayWord from "./Content/TodayWord";
import AuthContext from "./store/auth-context";
import ModalContext from "./store/modal-context";
import PersonalInfoContext from "./store/personal-info-context";
import { Person } from "@mui/icons-material";

function App() {
  const context = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTodayWord, setIsTodayWord] = useState(true);

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [group, setGroup] = useState("");

  const idHandler = (event) => {
    setId(event.target.value);
  };

  const pwdHandler = (event) => {
    setPwd(event.target.value);
  };

  const loginHandler = () => {
    if (id === "admin" && pwd === "1234") {
      setIsLoggedIn(true);
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const todayWordHandler = () => {
    setIsTodayWord(true);
  };

  const attendanceHandler = () => {
    if (isLoggedIn === false) {
      alert("로그인이 필요합니다.");
    } else {
      setIsTodayWord(false);
    }
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log(open);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(open);
  };

  return (
    <PersonalInfoContext.Provider
      value={{
        id: "",
        pwd:"",
        group:"",
        onId: idHandler,
        onPwd: pwdHandler,
      }}>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          isTodayWord: isTodayWord,
          onLogin: loginHandler,
          onLogout: logoutHandler,
          onTodayWord: todayWordHandler,
          onAttendance: attendanceHandler,
        }}
      >
        <ModalContext.Provider
          value={{
            isOpen: open,
            onHandleClose: handleClose,
            onHandleOpen: handleOpen,
          }}
        >
          <Box sx={{ flexGrow: 0 }}>
            <AppBar />
            <MainContainer>
              {isTodayWord ? <TodayWord /> : <Attendance />}
            </MainContainer>
            <BottomNav />
          </Box>
        </ModalContext.Provider>
      </AuthContext.Provider>
    </PersonalInfoContext.Provider>
  );
}

export default App;
