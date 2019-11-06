import React from "react";
import ReactDOM from "react-dom";
import "./app.scss";
import App from "./app.js";
export default function Index() {
    return (
        <React.Fragment>
            <App />
        </React.Fragment>
    );
}

ReactDOM.render(<Index />, document.querySelector("#app"));
