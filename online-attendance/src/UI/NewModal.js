import React, { useContext, useState } from "react";
import { Modal } from "@mui/material";
import ModalContext from "../store/modal-context";
import AuthContext from "../store/auth-context";
import SignIn from "../Content/SignIn";
import SignUp from "../Content/SignUp";
import MyPage from "../Content/MyPage";

const NewModal = (props) => {
  const actx = useContext(AuthContext);
  const mctx = useContext(ModalContext);

  return (

    
      <Modal
        open={mctx.isOpen}
        onClose={mctx.onHandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Bar>
          {actx.isLoggedIn ? <MyPage></MyPage> : <SignIn></SignIn>}
        </Bar>
      </Modal>
  );
};

const Bar = React.forwardRef((props, ref) => (
  <span {...props} ref={ref}>
      {props.children}
  </span>
));

export default NewModal;
