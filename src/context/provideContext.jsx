import { useContext } from "react";
import { Context } from "./createContext";

export const Provide = ({ children }) => {
    return (
        <Context.Provider value = {{

        }}>
        {children}
        </Context.Provider>
    )
};

export const useCart = () => {
    return useContext(Context);
  };