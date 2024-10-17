import React, { useContext, useState } from "react";
import { Context } from "./createContext";

export const Provider = ({ children }) => {

    const [count, setCount] = useState(0);

    const addStudent = () => {

        setCount(count+1);
    }

    return (
        <Context.Provider value = {{
            count : count,
            addStudent,
        }}>
        {children}
        </Context.Provider>
    )
};

export const useCart = () => {
    return useContext(Context);
  };