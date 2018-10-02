import { combineReducers } from "redux";
import { INPUT } from "actions";

const inputReducer = (state = "lowkey", action) => {
  switch (action.type) {
    case INPUT:
      return action.input;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  inputReducer
});

export default rootReducer;
