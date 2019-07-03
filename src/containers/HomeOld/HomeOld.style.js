import styled, { css } from "styled-components";
import { Flex } from "../../style/grid";
import { darkGray, lightBlue, desktopPadding } from "../../style/constants";

export const ColorLine = styled(Flex)`
  width: 10%;
  height: 8px;
  background-color: black;
`;

export const ColumnHeader = styled.h1`
  font-size: 30px;
  color: black;
`;

export const Row = styled(Flex)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Column = styled(Flex)`
  width: 33%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavButton = styled.button`
  background-color: ${props => props.bgColor};
  border-width: 0px;
  padding: 20px;
  font-size: 30px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MainFrameContentArea = styled(Flex)`
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  justify-content: top;
  align-items: center;
  width: 100%;
  height: 85%;
`;

export const MainFrameHeaderArea = styled(Flex)`
  display: flex;
  flex-direction: row;
  background-color: ${lightBlue};
  height: 15%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const MainFrameHeader = styled.h1`
  font-size: 4em;
  color: white;
`;

export const MainFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 100%;
  border: 0;
  overflow: visible;
  transition: all 1s ease-in-out;
  background-color: white;
`;

export const ReportFrame = styled.iframe`
  /* width: 800px; */
  width: 80vw;
  height: 100%;
  border: 0;
  overflow: visible;
  transition: all 1s ease-in-out;
  ${({ bang }) =>
    bang &&
    css`
      /* width: 1000px; */
      width: 95vw;
    `}
`;

export const HomeContainer = styled(Flex)`
  position: relative; 
  width: 100vw; 
  height: 100vh; 
  background-color: ${darkGray};
  justify-content: center;
  padding: ${desktopPadding};
  /* &:before {
    content: "";
    z-index: -1;
    position: inherit;
    left: inherit;
    top: inherit;
    width: 100vw;
    height: 100vh;
    background-image: inherit;
    background-size: cover;
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(05px);
    filter: blur(10px);
  }
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
  position: fixed; */
`;

export const ReportContainer = styled(Flex)`
  transition: all 1s ease-in-out;
  width: fit-content;
  /* ${({ bang }) =>
    bang &&
    css`
      width: 100%;
    `} */
  overflow: hidden;
  /* border-radius: 10%; */
  /* border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  border-bottom-left-radius: 2%;
  border-bottom-right-radius: 2%; */
  box-shadow: 0 15px 40px rgba(0, 0, 0, 1);
  /* overflow: visible; */
  /* height: fit-content; */
`;
