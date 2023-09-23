const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      console.log("toggling sidebar");
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case "HIDE_SIDEBAR":
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case "TOGGLE_DARK_MODE":
      return { ...state, isDarkMode: !state.isDarkMode };
    case "HANDLE_PAGE_NO":
      return { ...state, index: action.payload };

    default:
      throw new Error(`you're not handling a dispatch: ${action.type}`);
  }
};
export default reducer;
