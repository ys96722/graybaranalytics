import React from "react"
import {
  LoginContainer,
  LoginBox,
  SignupBox,
  LoginForm,
  LoginInput,
  LoginSubmit,
  InputContainer,
  FieldContainer,
  Hline,
  ForgotBox,
  ConfirmBox
} from "./Login.style"
import validate from "./validate"
import useFormValidation from "./useFormValidation"
import { H2, H4, ErrorMessage } from "../../style/grid"
import firebase, { FirebaseContext } from "../../firebase"

const INITIAL_STATE = {
  company: "",
  email: "",
  password: ""
}

function Login(props) {
  //   const [inputInFocus, setInputInFocus] = React.useState({});
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
    inputInFocus
  } = useFormValidation(INITIAL_STATE, validate, authenticateUser)

  // const [login, setLogin] = React.useState(true)
  const [firebaseError, setFirebaseError] = React.useState(null)
  const [activeViewIndex, setActiveViewIndex] = React.useState(0)

  async function authenticateUser() {
    const { company, email, password } = values
    try {
      if (activeViewIndex === 0) {
        await firebase.login(email, password)
      } else if (activeViewIndex === 1) {
        await firebase.register(company, email, password)
        setActiveViewIndex(3)
      } else if (activeViewIndex === 2) {
        await firebase.resetPassword(email)
      }
      console.log("Authenticated")
      props.history.replace("/")
    } catch (err) {
      console.error("authentication error", err)
      setFirebaseError(err.message)
    }
  }

  const { user } = React.useContext(FirebaseContext)
  const forgot = (
    <button
      style={{
        textDecoration: "underline",
        cursor: "pointer",
        backgroundColor: "transparent",
        border: "none",
        color: "white",
        alignSelf: "flex-end",
        marginTop: "10px"
      }}
      onClick={e => {
        setActiveViewIndex(2)
      }}
    >
      <H4>Forgot Username / Password</H4>
    </button>
  )
  const boxes = [
    <LoginBox
      id="logIn"
      justify="center"
      align="center"
      direction="column"
      fadeIn={true}
    >
      <H2>Log into your account</H2>
      {/* <H4 style={{ marginTop: "5px" }}>
        Not Registered?{" "}
        <button
          onClick={e => {
            setActiveViewIndex(1)
          }}
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "none"
          }}
        >
          <H4>Create an account</H4>
        </button>
      </H4> */}
      <LoginForm onSubmit={handleSubmit}>
        <InputContainer triggerHighlight={inputInFocus.email && "go"}>
          <FieldContainer>
            <LoginInput
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Email"
              name="email"
              type="email"
              value={values.email}
              autoComplete="off"
            />
          </FieldContainer>
          {errors.email && <ErrorMessage>*{errors.email}</ErrorMessage>}
          <Hline />
        </InputContainer>
        <InputContainer triggerHighlight={inputInFocus.password && "go"}>
          <FieldContainer>
            <LoginInput
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Password"
              name="password"
              type="password"
              value={values.password}
              autoComplete="off"
            />
          </FieldContainer>
          {errors.password && <ErrorMessage>*{errors.password}</ErrorMessage>}
          {firebaseError && <ErrorMessage>*{firebaseError}</ErrorMessage>}
          <Hline />
        </InputContainer>
        {/* {forgot} */}
        <LoginSubmit type="submit">Login</LoginSubmit>

        {/* {forgot} */}
      </LoginForm>
    </LoginBox>,
    <SignupBox
      id="signUp"
      justify="center"
      align="center"
      direction="column"
      fadeIn={true}
    >
      <H2>Sign up for a new account</H2>
      <H4 style={{ marginTop: "5px" }}>
        already have an account?{" "}
        <button
          onClick={e => {
            setActiveViewIndex(0)
          }}
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "none"
          }}
        >
          <H4>Log in</H4>
        </button>
      </H4>
      <LoginForm onSubmit={handleSubmit}>
        <InputContainer triggerHighlight={inputInFocus.company && "go"}>
          <FieldContainer>
            <LoginInput
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Company Name"
              name="company"
              type="text"
              value={values.company}
              autoComplete="off"
            />
          </FieldContainer>
          <Hline />
        </InputContainer>

        <InputContainer triggerHighlight={inputInFocus.email && "go"}>
          <FieldContainer>
            <LoginInput
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Email"
              name="email"
              type="email"
              value={values.email}
              autoComplete="off"
            />
          </FieldContainer>
          {errors.email && <ErrorMessage>*{errors.email}</ErrorMessage>}
          <Hline />
        </InputContainer>
        <InputContainer triggerHighlight={inputInFocus.password && "go"}>
          <FieldContainer>
            <LoginInput
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Password"
              name="password"
              type="password"
              value={values.password}
              autoComplete="off"
            />
          </FieldContainer>
          {errors.password && <ErrorMessage>*{errors.password}</ErrorMessage>}
          {firebaseError && <ErrorMessage>*{firebaseError}</ErrorMessage>}
          <Hline />
        </InputContainer>
        <LoginSubmit type="submit">Sign up</LoginSubmit>
        {forgot}
      </LoginForm>
    </SignupBox>,
    <ForgotBox
      id="signUp"
      justify="center"
      align="center"
      direction="column"
      fadeIn={true}
    >
      <H2>Reset Password</H2>
      <H4 style={{ marginTop: "5px" }}>
        already have an account?{" "}
        <button
          onClick={e => {
            setActiveViewIndex(0)
          }}
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "none"
          }}
        >
          <H4>Log in</H4>
        </button>
      </H4>
      <LoginForm onSubmit={handleSubmit}>
        <InputContainer triggerHighlight={inputInFocus.email && "go"}>
          <FieldContainer>
            <LoginInput
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Email"
              name="email"
              type="email"
              value={values.email}
              autoComplete="off"
            />
          </FieldContainer>
          {errors.email && <ErrorMessage>*{errors.email}</ErrorMessage>}
          {firebaseError && <ErrorMessage>*{firebaseError}</ErrorMessage>}
          <Hline />
        </InputContainer>

        <LoginSubmit type="submit">Reset</LoginSubmit>
      </LoginForm>
    </ForgotBox>,
    <ConfirmBox>
      <h1>Hi</h1>
    </ConfirmBox>
  ]

  return user ? (
    <>{props.history.push("/")}</>
  ) : (
    <LoginContainer
      direction="column"
      justify="center"
      align="center"
      src={require("../../assets/graybar-electric-office.jpg")}
    >
      {/* <img src={require("../../assets/Graybar_logo.png")} /> */}
      <img
        src={require("../../assets/logo_transparent.png")}
        style={{ marginBottom: "25px" }}
        alt="logo"
      />
      {boxes[activeViewIndex]}
    </LoginContainer>
  )
}

export default Login
