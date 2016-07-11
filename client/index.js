/*
** Styles
*/
import globalCSS from "./styles/global.css";

/*
** Containers
*/
import LandingPage from "./containers/LandingPage";
import ReadingPage from "./containers/ReadingPage";

/*
** Required
*/
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, applyRouterMiddleware } from "react-router";
import useScroll from "react-router-scroll";
import { syncHistoryWithStore } from "react-router-redux"

import { Provider } from "react-redux";
import configureStore from "./store";


const    store   = configureStore(),
      // history = syncHistoryWithStore(useScroll(useRouterHistory(createBrowserHistory))(), store);
         history = syncHistoryWithStore(browserHistory, store);

/*
** For Google Analytics
*/
history.listen(location => store.dispatch({ type: "NAVIGATE", location }))

ReactDOM.render(
    (
        <div className="app">
            <Provider store={ store }>
                <Router history={ history } render={ applyRouterMiddleware(useScroll()) }>
                    <Route path="/" component={ LandingPage } />
                    <Route path="/reading" component={ ReadingPage } />
                </Router>
            </Provider>
        </div>
    ),
    document.getElementById("content")
);
