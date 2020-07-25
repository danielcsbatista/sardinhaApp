import { CLICK_UPDATE_VALUE } from "../actions/actionTypes";
import { State } from "../store/interface";

const initialState: State = {
  newValue: "teste",
};
export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue,
      };
    default:
      return state;
  }
};
