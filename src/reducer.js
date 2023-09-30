const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      console.log("toggling sidebar");
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case "HIDE_SIDEBAR":
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case "TOGGLE_DARK_MODE":
      return { ...state, isDarkMode: !state.isDarkMode };

    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "FETCH_PAGE_WISE_SUCCESS":
      return { ...state, index: action.payload };
    case "HANDLE_SEARCH_PARAMS":
      search = `?page=${pageNumber}`;
      return {
        ...state,
        index: action.payload,
        search: `?page=${action.payload}`,
      };

    default:
      throw new Error(`you're not handling a dispatch: ${action.type}`);
  }
};
export default reducer;
