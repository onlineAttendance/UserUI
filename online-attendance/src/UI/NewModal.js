import React from "react";
import { Modal } from "@mui/material";

const NewModal = (props) => {
  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {props.children}
    </Modal>
  );
};

export default NewModal;
