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

// const products_url = `https://strapi-store-server.onrender.com/api/products`;

/*

  >>======= LocalStorage 
 */

const handleThemeToggle = () => {
  const isDarkMode = JSON.parse(localStorage.getItem("theme")) || {
    dark: false,
  };
  localStorage.setItem("theme", JSON.stringify(isDarkMode));
  return isDarkMode;
};

const cartData = JSON.parse(localStorage.getItem("cartDetails"));
// console.log(cartData);

const defaultState = {
  pageIndex: 1,
  products: [],
  cartProducts: cartData ? cartData.cartProducts : [],
  noOfItemsInCart: 0,
  totalPriceOfCart: 0,
  isSidebarOpen: false,
  slick: carouselData,
  isDarkMode: handleThemeToggle(),
  user: null,
};

const AppContext = createContext();
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const formRef = useRef({});
  const emailRef = useRef({});
  const passwordRef = useRef({});
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  /*

  >>======= authentication
 */
  const createUserWithEmail = (email, password) => {};

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

  useEffect(() => {
    if (state.isDarkMode.dark) {
      document.documentElement.classList.add("dark:bg-slate-800", "text-white");
      localStorage.setItem("theme", JSON.stringify({ dark: true }));
      return;
    } else {
      document.documentElement.classList.remove(
        "dark:bg-slate-800",
        "text-white"
      );
      localStorage.setItem("theme", JSON.stringify({ dark: false }));
      return;
    }
  }, [state.isDarkMode.dark]);

  /*

  >>======= Add to Cart
 */

  const addToCart = (cartItem) => {
    // console.log(id);

    dispatch({
      type: "ADD_TO_CART",
      payload: cartItem,
    });
  };
  /*

  >>======= Cart Features
 */
  const removeCartItem = (id) => {
    dispatch({ type: "REMOVE_CART_PRODUCTS", payload: id });
  };

  const getCartTotals = (products) => {
    // console.log(products);
    const newProducts = products.reduce(
      (acc, currentItem) => {
        acc.noOfItems =
          parseInt(acc.noOfItems) + parseInt(currentItem.itemAmount);
        // console.log(currentItem);

        acc.totalPrice +=
          parseInt(currentItem.itemAmount) * parseInt(currentItem.price);

        return acc;
      },
      { noOfItems: 0, totalPrice: 0 }
    );
    // console.log(newProducts);
    dispatch({
      type: "GET_CART_TOTALS",
      payload: {
        totalPrice: newProducts.totalPrice,
        noOfItems: newProducts.noOfItems,
      },
    });
  };

  useEffect(() => {
    // console.log("useEffect");
    getCartTotals(state.cartProducts);
    // console.log(formatPrice(16998));

    // console.log(state);
  }, [state.cartProducts]);

  const handleCartAmountChange = (id, newAmount) => {
    dispatch({ type: "HANDLE_CART_AMOUNT_CHANGE", payload: { id, newAmount } });
  };
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
        addToCart,
        removeCartItem,
        getCartTotals,
        handleCartAmountChange,
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
