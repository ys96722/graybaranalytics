import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import GlobalStyle from "../../style/GlobalStyle"
import Login from "../Login/Login"
import useAuth from "../Login/useAuth"
import Home from "../Home/Home"
import firebase, { FirebaseContext } from "../../firebase"
import PrivateRoute from "./PrivateRoute"
// import { Redirect } from "react-router-dom";

function App() {
  // Use context and keep track of the login user.. In case of change, bounce the user back to login
  // const [authenticated, setAuthenticated] = React.useState(false)
  const user = useAuth()
  // if (user) setAuthenticated(true)

  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <GlobalStyle />
        {/* Render Application Container */}
        {/* Render Application Header */}
        <Switch>
          <PrivateRoute exact path="/" component={Home} authenticated={user} />
          <Route exact path="/login" component={Login} />
        </Switch>
        {/* Render Application Footer */}
      </FirebaseContext.Provider>
    </BrowserRouter>
  )
}

export default App
