import React,{useContext} from "react";
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
import AuthContext from "../store/auth-context";
import ModalContext from "../store/modal-context";

const SignUp = (props) => {
  const actx = useContext(AuthContext);
  const mctx = useContext(ModalContext);

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
          <Typography variant="h5">회원가입</Typography>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar sx={{ width: 80, height: 80 }}></Avatar>
            <Button variant="text">프로필 사진 추가하기</Button>
          </Box>
          <TextField label="이름" variant="outlined"></TextField>
          <TextField label="비밀번호" variant="outlined"></TextField>
          <TextField label="비밀번호 확인" variant="outlined"></TextField>
          <Grid container>
            <Grid item xs={6}>
              <Button variant="contained" fullWidth onClick={mctx.onHandleClose}>
                취소
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" ful   lWidth>
                로그인
              </Button>
            </Grid>
            <Grid item xs>
              <Button variant="text" fullWidth>
                이미 회원이십니까?
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Paper>
    </Box>
  );
};

export default SignUp;
