import React from "react";
import {
  Box,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import Login from "@mui/icons-material/Login";
const SignIn = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper>
        <Stack
          spacing={2}
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Avatar>
            <Login></Login>
          </Avatar>
          <Typography variant="h5">로그인</Typography>
          <TextField label="ID" variant="outlined"></TextField>
          <TextField label="Password" variant="outlined"></TextField>
          <Grid container>
            <Grid item xs={6}>
              <Button variant="contained" fullWidth>
                취소
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" fullWidth>
                로그인
              </Button>
            </Grid>
            <Grid item xs>
              <Grid container>
                <Grid item xs={6}>
                  <Button variant="text" fullWidth>
                    비밀번호 찾기
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="text" fullWidth>
                    회원가입
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Stack>
      </Paper>
    </Box>
  );
};

export default SignIn;
