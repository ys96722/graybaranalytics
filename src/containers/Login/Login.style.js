import styled, { css } from "styled-components"
import { Div, Flex, H4 } from "../../style/grid"
import {
  gray,
  lightBlue,
  darkBlue,
  midGray,
  darkGray
} from "../../style/constants"

export const LoginContainer = styled(Flex)`
  &:before {
    content: "";
    z-index: -1;
    position: inherit;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-image: inherit;
    background-size: cover;
    -webkit-filter: blur(8px);
    -moz-filter: blur(8px);
    -o-filter: blur(8px);
    -ms-filter: blur(8px);
    filter: blur(8px);
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
  }
  background-position: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  justify-content: center;
  align-content: center;

  img {
    /* position: absolute; */
    top: 10%;
    /* left: calc(50% - this.width); */
  }
`

const Box = styled(Flex)`
  width: 30%;
  /* height: 40%; */
  padding-top: 20px;
  padding-bottom: 20px;
  /* background-color: white; */
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  z-index: 1;
  transition: all 1s;
  margin-bottom: 25px;

  transition: all 0.4s;

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 1);
    background-color: rgba(255, 255, 255, 0.4);
  }

  ${H4} {
    /* color: ${lightBlue}; */
    color: white;
    font-weight: 500;
    button {
        /* color: ${lightBlue}; */
        color: white;
    }
    /* color: "#82878c"; */
    /* color: ${darkGray}; */
  }
`

export const LoginBox = styled(Box)``

export const SignupBox = styled(Box)``

export const ForgotBox = styled(Box)``

export const ConfirmBox = styled(Box)``

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  /* margin-bottom: auto; */
`

export const LoginInput = styled.input`
  min-height: 22px;
  /* color: rgb(49, 49, 49); */
  /* color: ${darkGray}; */
  color: black;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  background: transparent;
  padding: 0px;
  /* font: 400 16px/24px Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif; */
  margin: 0px;

  /* &:focus {
    background-color: ${gray};
  } */
`

export const LoginSubmit = styled.button`
  margin-top: 30px;
  /* background-color: ${gray}; */
  background-color: ${midGray};
  /* color: rgb(230, 230, 230); */
  color: ${darkGray};
  cursor: default;
  -webkit-font-smoothing: antialiased;
  text-transform: none;
  display: block;
  cursor: pointer;
  text-align: center;
  user-select: none;
  -webkit-appearance: none;
  width: calc(100% + 12px);
  height: 44px;
  position: relative;
  font: 500 16px/22px Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 11px 33px;
  border-radius: 4px;
  border-width: initial;
  border-style: none;
  border-color: none;
  border-image: initial;
  outline: none;
  transition: all 0.1s ease-in-out 0s;
  margin: 22px 0px 0px -6px;

  &:hover {
    /* background-color: ${darkBlue}; */
    transform: scale(1.1);
  }
`

export const InputContainer = styled(Div)`
  box-sizing: border-box;
  position: relative;
  min-height: 50px;
  padding-top: 11px;
  padding: 10px;
  background-color: transparent;
  border-radius: 5px;

  ${({ triggerHighlight }) =>
    triggerHighlight &&
    css`
      /* background-color: black; */
      background-color: ${midGray};
    `}
`

export const FieldContainer = styled(Div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Hline = styled(Div)`
  /* background-color: ${darkBlue}; */
  background-color: ${midGray};
  /* width: calc(100% + 12px); */
  width: 100%;
  height: 1px;
  /* margin: 0px 0px 0px -6px; */
  margin: 0;
`
