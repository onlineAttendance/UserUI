import React, {createContext} from "react";

const PersonalInfoContext = createContext({
    id: "",
    pwd: "",
    group: "",
});

export default PersonalInfoContext;