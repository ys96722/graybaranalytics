import { createGlobalStyle } from "styled-components"
import { midGray, yellow } from "./constants"

const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        margin: 0;
        padding: 0;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

        *:focus {
            outline: none;
        }
    }

    * {
        /* font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important; */
        font-family: arial,sans-serif;
        overflow: hidden;
        &::selection {
            background: ${yellow};
            color: black;
        }
    }

    /* body, button {
        font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    } */

    input {
        border: 0;
        border-radius: 0;
        line-height: inherit;

        ::placeholder { /* Firefox, Chrome, Opera */ 
            color: ${midGray}; 
        } 
        
        :-ms-input-placeholder { /* Internet Explorer 10-11 */ 
            color: ${midGray}; 
        } 
        
        ::-ms-input-placeholder { /* Microsoft Edge */ 
            color: ${midGray}; 
        } 
    }

    button, input, optgroup, textarea {
        outline: none;
        outline-color: initial;
        outline-style: none;
        outline-width: initial;
    }
`

export default GlobalStyle
