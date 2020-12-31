import {applyMiddleware, compose, createStore} from "redux";
import {reducer} from "./reducer";
import createSagaMiddleware from "redux-saga";
import {saga} from "./saga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);