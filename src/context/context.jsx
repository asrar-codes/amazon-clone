import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { carouselData } from "../assets/carouselData";
import reducer from "../reducer";
import { auth, db } from "../firebase/firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { LOGINDATA } from "../Pages/SignUp";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { data } from "autoprefixer";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

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

export const defaultState = {
  pageIndex: 1,
  products: [],
  orders: [],
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
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const userId = user.uid;
        // console.log(uid);

        // getUserCart().then((cartInfo) => console.log(cartInfo));
        dispatch({ type: "SET_USER", payload: user });

        (async () => {
          const cartInfo = await getUserCart("users");
          // console.log(cartInfo);
          if (cartInfo) {
            // console.log(cartInfo);
            dispatch({
              type: "GET_USER_CART",
              payload: cartInfo.cartProducts,
            });
            return;
          } else {
            saveUserCart();
          }
        })();

        // ...
      } else {
        // User is signed out
        logout();
        // ...
      }
    });
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch({ type: "CLEAR_USER" });
      // localStorage.removeItem("cartDetails");
      // console.log(auth.currentUser);
    } catch (error) {
      console.log(error);
    }
  };
  // logout();

  const saveUserCart = async () => {
    const data = JSON.parse(localStorage.getItem("cartDetails"));
    const newData = { ...data, userId: auth.currentUser.uid };
    // console.log(newData);
    try {
      const Ref = doc(db, "users", auth.currentUser.uid);
      const docRef = await setDoc(Ref, newData);
      // console.log(docRef);
    } catch (error) {
      console.log(error);
    }
  };
  const updateUserCart = async () => {
    const data = JSON.parse(localStorage.getItem("cartDetails"));
    // console.log(data);
    try {
      const userCartRef = doc(db, "users", auth.currentUser.uid);
      // const userCartRef = doc(db, "users", `${state.user.uid}`);
      await updateDoc(userCartRef, {
        ...data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getUserCart = async (collectionName) => {
    try {
      const userCartRef = collection(db, collectionName);
      const q = query(
        userCartRef,
        where(collectionName, "==", auth.currentUser.uid)
      );
      // console.log(querySnapshot);
      const querySnapshot = await getDocs(q);
      // console.log(querySnapshot);
      // console.log(querySnapshot);
      let data;
      // console.log(data)
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        // console.log("heahe");

        data = { ...doc.data() };
      });
      return data;
    } catch (error) {
      console.log(error);
    }
    return null;
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
    // console.log(state.cartProducts);
    if (state.user != null) {
      // console.log(JSON.parse(localStorage.getItem("cartDetails")));
      // console.log("updating user cart");
    }
  };
  /*

  >>======= Cart Features
 */
  const removeCartItem = (id) => {
    dispatch({ type: "REMOVE_CART_PRODUCTS", payload: id });
    if (state.user != null) {
      // updateUserCart();
    }
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
    localStorage.setItem(
      "cartDetails",
      JSON.stringify({
        cartProducts: state.cartProducts,
        noOfItemsInCart: newProducts.noOfItems,
        totalPriceOfCart: newProducts.totalPrice,
      })
    );
    dispatch({
      type: "GET_CART_TOTALS",
      payload: {
        totalPrice: newProducts.totalPrice,
        noOfItems: newProducts.noOfItems,
      },
    });
  };

  useEffect(() => {
    // console.log(state.cartProducts);
    // console.log("useEffect");

    getCartTotals(state.cartProducts);
    if (state.user != null) {
      console.log("updating cart...");
      updateUserCart();
    }

    // console.log(formatPrice(16998));

    // console.log(state);
  }, [state.cartProducts]);

  const handleCartAmountChange = (id, newAmount) => {
    dispatch({ type: "HANDLE_CART_AMOUNT_CHANGE", payload: { id, newAmount } });
  };

  // orders

  const dispatchOrders = (data) => {
    dispatch({ type: "HANDLE_ORDERS_SUCCESS", payload: data });
  };
  const setOrders = (data) => {
    dispatch({ type: "FETCH_ORDERS_SUCCESS", payload: data });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        hideSidebar,
        toggleDarkMode,
        toggleSidebar,
        formRef,
        emailRef,
        passwordRef,
        getUserCart,
        addToCart,
        removeCartItem,
        getCartTotals,
        handleCartAmountChange,
        logout,
        updateUserCart,
        dispatchOrders,
        setOrders,
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
