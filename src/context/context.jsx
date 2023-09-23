import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { carouselData } from "../assets/carouselData";
import reducer from "../reducer";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { SingleProduct } from "../Pages";

const products_url = `https://strapi-store-server.onrender.com/api/products`;

/*

  >>======= Loaders 
 */

const defaultState = {
  index: 0,
  isSidebarOpen: false,
  slick: carouselData,
  isDarkMode: false,
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

  const hideSidebar = () => {
    dispatch({ type: "HIDE_SIDEBAR" });
  };

  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };
  /*

  >>======= set page no
 */
  const handlePageNo = (id) => {
    dispatch({ type: "HANDLE_PAGE_NO", payload: id });
  };
  /*

  >>======= fetch page no
 */

  const fetchPage = async (pageNo) => {
    const response = await fetch(`${products_url}?page=${state.index}`);
    const data = await response.data;
    // console.log(response.data);
  };
  useEffect(() => {
    fetchPage(state.index);
  }, [state.index]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        hideSidebar,
        toggleDarkMode,
        logout,
        toggleSidebar,
        formRef,
        emailRef,
        passwordRef,
        handlePageNo,
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
