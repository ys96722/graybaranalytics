import React from "react"
import firebase from "../../firebase"

function useAuth() {
  const [authUser, setAuthUser] = React.useState(null)

  React.useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      if (user) {
        // localStorage.setItem("authUser", JSON.stringify(authUser));
        setAuthUser(user)
        console.log("User is already signed in.")
        // console.log(user);
      } else {
        // localStorage.removeItem("authUser");
        setAuthUser(null)
        console.log("User is not signed in")
      }
    })
    return () => unsubscribe()
  }, [])

  return authUser
}

export default useAuth
