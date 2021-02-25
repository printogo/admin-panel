import { types } from "../types/types";

const initialState = {
  sidebarShow: "responsive",
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setSidebar:
          return { ...state, sidebarShow: action.payload };
        default:
          return state;
      }
};