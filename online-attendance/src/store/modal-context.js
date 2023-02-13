import React, {createContext} from "react";

const ModalContext = createContext({
    isOpen: false
});

export default ModalContext;