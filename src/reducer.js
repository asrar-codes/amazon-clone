import { toast } from "react-toastify";

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      console.log("toggling sidebar");
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case "HIDE_SIDEBAR":
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case "TOGGLE_DARK_MODE":
      return { ...state, isDarkMode: !state.isDarkMode };

    case "ADD_TO_CART":
      toast.success("Item Added To Cart");
      // console.log(first)

      // console.log(state.cartProducts);

      const sameProduct = state.cartProducts.find(
        (item) =>
          item.cartItem.id == action.payload.cartItem.id &&
          item.itemColor === action.payload.itemColor
      );
      // console.log(sameProduct);
      // console.log(newProduct);
      if (sameProduct) {
        const newProducts = state.cartProducts.map((item) => {
          if (
            item.cartItem.id == action.payload.cartItem.id &&
            item.itemColor === action.payload.itemColor
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

    default:
      throw new Error(`you're not handling a dispatch: ${action.type}`);
  }
};
export default reducer;
