import "babel-polyfill"
import "react-app-polyfill/ie11"
// import "core-js/stable"
// import "babel/polyfill"
import React from "react"
import ReactDOM from "react-dom"
import App from "./containers/App/App"
import * as serviceWorker from "./serviceWorker"
// import "babel-polyfill/dist/polyfill"

// Polyfills
// import "./polyfill"

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
