import React from "react"
import ReactDOM from "react-dom"
import App from "./containers/App/App"
import * as serviceWorker from "./serviceWorker"
import "./polyfill"
import "babel-polyfill"
import "core-js/es/map"
import "core-js/es/set"

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
