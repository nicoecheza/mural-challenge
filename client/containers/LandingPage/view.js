
import React, { Component, PropTypes } from "react";
import CSSModules from "react-css-modules";
import { push } from "react-router-redux";

/*
** Styles
*/
import styles from "./local.css";

/*
** Actions
*/

/*
** Components
*/

class LandingPage extends Component {

    render() {

        return null;

    }
}

LandingPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
};

export default CSSModules(LandingPage, styles);
