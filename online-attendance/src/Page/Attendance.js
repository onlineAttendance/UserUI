import React from "react";
import {
  Box,
  Grid,
  TextField,
  CircularProgress,
  Typography,
  ListItem,
  Avatar,
  ListItemText,
  List,
  Divider,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Attendance = () => {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs display="flex" justifyContent="center" alignItems="center">
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress size={100} value={50} variant="determinate" />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >
              {`${Math.round(50)}%`}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="standard-basic"
          label="출석코드"
          variant="standard"
        ></TextField>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              밥조
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <List>
              <Typography variant="h6" align="center">
                미출석자
              </Typography>
              <ListItem>
                <Avatar>
                  <AccountCircle />
                </Avatar>
                <ListItemText primary="김철수" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <Avatar>
                  <AccountCircle />
                </Avatar>
                <ListItemText primary="김철수" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <Avatar>
                  <AccountCircle />
                </Avatar>
                <ListItemText primary="김철수" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6}>
            <List>
              <Typography variant="h6" align="center">
                출석자
              </Typography>
              <ListItem>
                <Avatar>
                  <AccountCircle />
                </Avatar>
                <ListItemText primary="홍승택" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <Avatar>
                  <AccountCircle />
                </Avatar>
                <ListItemText primary="최민호" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <Avatar>
                  <AccountCircle />
                </Avatar>
                <ListItemText primary="김철수" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Attendance;
