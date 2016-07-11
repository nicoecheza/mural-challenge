import { connect } from "react-redux";
import View from "./view";
import selectProps from "./selectProps";

export default connect(selectProps)(View);
