import { createStore } from "redux";

// Define the initial state
const initialState = {
  userId: null,
};

// Define the reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_ID":
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(rootReducer);

export default store;
