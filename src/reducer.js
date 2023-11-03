import { toast } from "react-toastify";

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      console.log("toggling sidebar");
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case "HIDE_SIDEBAR":
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case "TOGGLE_DARK_MODE":
      localStorage.setItem(
        "theme",
        JSON.stringify({ dark: !state.isDarkMode.dark })
      );
      return { ...state, isDarkMode: { dark: !state.isDarkMode.dark } };

    case "ADD_TO_CART":
      toast.success("Item Added To Cart");
      // console.log(first)

      // console.log(state.cartProducts);

      const sameProduct = state.cartProducts.find(
        (item) =>
          item.id == action.payload.id &&
          item.itemColor === action.payload.itemColor
      );
      // console.log(sameProduct);
      // console.log(newProduct);
      if (sameProduct) {
        const newProducts = state.cartProducts.map((item) => {
          if (
            item.id == action.payload.id &&
            item.itemColor == action.payload.itemColor
          ) {
            return {
              ...item,
              itemAmount:
                parseInt(item.itemAmount) + parseInt(action.payload.itemAmount),
            };
          }
          return item;
        });

        return {
          ...state,
          cartProducts: newProducts,
        };
      }

      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };
    case "REMOVE_CART_PRODUCTS":
      const newCartProducts1 = state.cartProducts.filter(
        (item) => item.id != action.payload
      );
      toast.success("Item removed from cart");

      return { ...state, cartProducts: newCartProducts1 };

    case "HANDLE_CART_AMOUNT_CHANGE":
      const newCartProducts2 = state.cartProducts.map((item) => {
        if (item.id == action.payload.id) {
          // console.log("heh");
          return { ...item, itemAmount: action.payload.newAmount };
        }
        return { ...item };
      });
      // console.log(newCartProducts2);
      toast.success("Cart Updated!");
      return { ...state, cartProducts: newCartProducts2 };

    case "GET_CART_TOTALS":
      return {
        ...state,
        noOfItemsInCart: action.payload.noOfItems,
        totalPriceOfCart: action.payload.totalPrice,
      };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "CLEAR_USER":
      return { ...state, cartProducts: [], user: null };
    case "GET_USER_CART":
      return { ...state, cartProducts: action.payload };

    default:
      throw new Error(`you're not handling a dispatch: ${action.type}`);
  }
};
export default reducer;
