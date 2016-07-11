import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { browserHistory } from "react-router";
import { routerMiddleware, routerReducer } from "react-router-redux"
import { createHistory } from "history";
import thunkMiddleware from "redux-thunk";
import { persistState } from "redux-devtools";
import createLogger from "redux-logger";
import { assign } from "lodash";
import * as reducers from "../reducers";

const loggerMiddleware = createLogger({
    level: "info",
    collapsed: true
}),

rootReducer = combineReducers(assign(reducers.default, { routing: routerReducer }));

let createStoreWithMiddleware;

if (DEVELOPMENT) {

    let devToolsExtension = window.devToolsExtension || null;

    createStoreWithMiddleware = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
            routerMiddleware(browserHistory),
        ),
        devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);

} else {
    createStoreWithMiddleware = compose(
        applyMiddleware(
          thunkMiddleware,
          routerMiddleware(browserHistory)
        )
    )(createStore);
}

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept("../reducers", () => {
            const nextReducer = rootReducer;
            store.replaceReducer(nextReducer);
        });
    }

  return store;

}
