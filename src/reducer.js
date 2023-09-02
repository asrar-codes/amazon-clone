const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      console.log("toggling sidebar");
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case "HIDE_SIDEBAR":
      return { ...state, isSidebarOpen: !state.isSidebarOpen };

    default:
      throw new Error("you're not handling a dispatch");
  }
};
export default reducer;
