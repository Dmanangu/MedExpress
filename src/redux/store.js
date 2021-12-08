import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";

import { createLogger } from "redux-logger";
import rootReducer from "./root-reducer";
const logger2 = createLogger();

const middlewares = [thunkMiddleware, logger2];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
