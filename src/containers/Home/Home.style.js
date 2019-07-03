import styled from "styled-components"
import { Flex } from "../../style/grid"
import {
  lightBlue,
  skyBlue,
  midBlue,
  darkBlue,
  midGray
} from "../../style/constants"

export const HomeContainer = styled(Flex)`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: flex-end;
`

const Container = styled(Flex)`
  /* height: 50%; */
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

export const BannerContainer = styled(Container)`
  flex-direction: column;
  background-color: transparent;
  height: 50%;
  /* justify-content: center; */
`

export const BannerMessageContainer = styled(Flex)`
  flex-direction: column;
  height: 80%;
  width: 100%;
  background-color: transparent;
  justify-content: center;
  align-items: flex-start;
  margin-left: 200px;
  h1 {
    color: white;
    font-size: 40px;
  }
`

export const LandingViewContainer = styled(Flex)`
  flex-direction: column;
  /* height and margin-top pushes the container down */
  height: 90%;
  width: 100%;
  justify-content: center;
  margin-top: auto;
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    left: inherit;
    top: inherit;
    width: inherit;
    height: inherit;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    left: inherit;
    top: inherit;
    width: inherit;
    height: inherit;
    background-color: rgba(0, 0, 0, 0.4);
  }
`

export const ContentContainer = styled(Container)`
  flex-direction: column;
  background-color: white;
  padding-top: 20px;
  /* Light Blue */
  /* background-color: rgba(0, 82, 130, 0.7); Light Blue*/
  /* Dark Blue */
  /* background-color: rgba(0, 56, 78, 0.9); */
  /* Gray */
  /* background-color: rgba(172, 174, 177, 0.7);  */
  /* Dark Gray */
  /* background-color: rgba(161, 161, 161, 0.5); */
  /* background-color: rgba(230, 230, 230, 0.5); */
`

export const ReportTitle = styled.h1`
  font-size: 30px;
  color: black;
  border: 1px solid black;
`

export const ContentContainerRow = styled(Flex)`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

export const ContentContainerColumn = styled(Flex)`
  flex-direction: column;
  width: 30%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 50px;

  svg {
    fill: ${lightBlue};
  }

  h1 {
    color: ${darkBlue};
    /* color: white; */
    font-size: 25px;
  }

  p {
    margin-top: auto;
    color: black;
    /* color: white; */
    margin-bottom: auto;
    text-align: left;
  }
`

export const ViewButton = styled.button`
  background-color: ${midBlue};
  border: none;
  color: white;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 45px;
  padding-right: 45px;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 1px;

  &:hover {
    transform: scale(1.1);
    color: ${midGray};
  }
`

export const LastLogin = styled.p`
  color: white;
`

export const ReportFrame = styled.iframe`
  /* width: 800px; */
  width: 100%;
  height: 92%;
  align-self: flex-end;
  border: 0;
  overflow: visible;
  transition: all 1s ease-in-out;
`

export const ReportContainer = styled(Flex)`
  transition: all 1s ease-in-out;
  width: fit-content;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 1);
  width: 100%;
  height: 100%;
`
