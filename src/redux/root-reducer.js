import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import requestRobots from "./request_data/request_data.reducer";
import searchRobots from "./searchfield/search.reducer";
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  requestRobots: requestRobots,
  search: searchRobots,
});
