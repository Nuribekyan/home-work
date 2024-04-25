import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import Saga from "./sagas";

const middleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(middleware));
middleware.run(Saga);
export default store;