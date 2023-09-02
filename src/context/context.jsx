import React, { createContext, useContext, useReducer, useRef } from "react";
import { carouselData } from "../assets/carouselData";
import reducer from "../reducer";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const defaultState = {
  isSidebarOpen: false,
  slick: carouselData,
};

const AppContext = createContext();
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const formRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  /*

  >>======= authentication
 */

  const logout = async () => {
    try {
      await signOut(auth);
      // console.log(auth.currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  /*

  >>======= Sidebar
 */

  const hideSidebar = () => {
    dispatch({ type: "HIDE_SIDEBAR" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        hideSidebar,
        logout,
        toggleSidebar,
        formRef,
        emailRef,
        passwordRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default ContextProvider;
