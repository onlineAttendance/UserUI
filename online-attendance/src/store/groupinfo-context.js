import React, {useContext} from "react";

const GroupInfoContext = React.createContext({
    groupInfo: null,
    setGroupInfo: (groupInfo) => {}
});

export const GroupInfoContextProvider = (props) => {
    const [groupInfo, setGroupInfo] = React.useState(null);

    return (
        <GroupInfoContext.Provider value={{groupInfo, setGroupInfo}}>
            {props.children}
        </GroupInfoContext.Provider>
    );
}

export const useGroupInfoContext = () => {
    return useContext(GroupInfoContext);
}

// Path: UserUI\online-attendance\src\store\groupinfo-context.js
// Compare this snippet from UserUI\online-attendance\src\Content\SignUp.js:
// import React, { useState } from "react";
// import { TextField, Button, Box, Typography } from "@mui/material";