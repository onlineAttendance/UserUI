import React,{useContext} from "react";
import {
  Box,
  Avatar,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  Stack,
} from "@mui/material";
import AuthContext from "../store/auth-context";
import ModalContext from "../store/modal-context";

const MyPage = (props) => {
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
      <Paper
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Stack spacing={2}>
          <Box sx={{alignItems:"center", display:"flex", flexDirection:"column"}}>
            <Avatar sx={{ width: 80, height: 80 }}></Avatar>
            <Button variant="text">프로필 사진 변경</Button>
            <Typography variant="h6">홍승택</Typography>
          </Box>
          <TextField label="비밀번호" variant="outlined" />
          <TextField label="비밀번호 확인" variant="outlined" />

          <Grid container>
            <Grid item xs={6}>
              <Button variant="contained" fullWidth onClick={mctx.onHandleClose}>취소</Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" fullWidth>수정</Button>
            </Grid>
          </Grid>
        </Stack>
      </Paper>
    </Box>
  );
};

export default MyPage;
