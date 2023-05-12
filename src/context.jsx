import React, { createContext, useContext, useReducer, useState } from "react";
import { carouselData } from "./assets/carouselData";
import reducer from "./reducer";

const defaultState = {
  isSidebarOpen: false,
  slick: carouselData,
};

const AppContext = createContext();
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <AppContext.Provider value={{ ...state, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default ContextProvider;
