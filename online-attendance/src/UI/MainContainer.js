import React from "react";
import { Container } from "@mui/material";

const MainContainer = (props) => {
  return (
    <>
      <Container maxWidth="xs" sx={{mt:7, mb:8}}>
        {props.children}
      </Container>
    </>
  );
};

export default MainContainer;
