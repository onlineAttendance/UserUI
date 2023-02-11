import React from "react";
import { Card,CardContent, Typography } from "@mui/material";


const CardComponent = (props) => {
  return (
    <Card key={props.id}>
      <CardContent>
        <Typography variant="body2" component="div">
          {props.date}
        </Typography>
        <Typography variant="h6" component="div">
          {props.title}
        </Typography>
        <Typography variant="body1" component="div">
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
