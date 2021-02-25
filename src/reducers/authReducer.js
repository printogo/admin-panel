import { types } from "../types/types";

export const authReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.login:
      return {
        ...state,
        token: payload.token,
        user: payload.user
      };
    case types.logout:
      return {};
    default:
      return state;
  }
};
