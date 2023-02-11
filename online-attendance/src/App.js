import React, { useState } from "react";
import { Box, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import AppBar from "./Components/AppBar";
import BottomNav from "./Components/BottomNav";
import Container from "@mui/material/Container";
import MainContainer from "./UI/MainContainer";
import Attendance from "./Content/Attendance";
import Question from "./Components/Question";
import TodayWord from "./Content/TodayWord";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const questions = [
  {
    id: 1,
    question: "What is your name?",
    options: ["A", "B", "C", "D"],
  },
  {
    id: 2,
    question: "What is your name?",
    options: ["A", "B", "C", "D"],
  },
];

function App() {
  return (
    <>
      <Box sx={{ flexGrow:0 }}>
        <AppBar />
        <MainContainer>
          <Attendance />
          <TodayWord />
        </MainContainer>
        <BottomNav />
      </Box>
    </>
  );
}

export default App;
