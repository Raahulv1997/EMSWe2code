import { createStore } from "redux";

// Define the initial state
const initialState = {
  userId: null,
  userGender: null,
  userImage: null,
  userName: null,
  token: null,
};

// Define the reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_DATA":
      return {
        ...state,
        userId: action.payload.userId,
        userGender: action.payload.userGender,
        userImage: action.payload.userImage,
        userName: action.payload.userName,
      };
    case "UPDATE_TOKEN":
      return {
        ...state,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(rootReducer);

export default store;
