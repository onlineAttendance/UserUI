import React from "react";
import { Container, Box, Typography } from "@mui/material";

const Question = (props) => {
  return (
    <Container fixed xs={{mb:100}}>
      {props.questions.map((question) => {
        return (
          <Box>
            <Typography variant="h6">{question.question}</Typography>
          </Box>
        );
      })}
    </Container>
  );
};

export default Question;
