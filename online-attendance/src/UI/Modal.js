import {Modal} from '@mui/material';

const Modal = () => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            
        </Modal>
    );
}

export default Modal;