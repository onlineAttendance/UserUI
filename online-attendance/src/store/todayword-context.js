import React, {useContext, useState} from "react";

const TodayWordContext = React.createContext({
    todayWord: "",
    setTodayWord: () => {},
});

export const TodayWordContextProvider = (props) => {
    const [todayWord, setTodayWord] = useState("");

    return <TodayWordContext.Provider value={{todayWord, setTodayWord}}>{props.children}</TodayWordContext.Provider>;
}

export const useTodayWordContext = () => {
    return useContext(TodayWordContext);
}
