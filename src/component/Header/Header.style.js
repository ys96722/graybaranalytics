import styled, { css } from "styled-components";
import { Flex } from "../../style/grid";
import { gray } from "../../style/constants";

export const NavContainer = styled(Flex)`
  flex-direction: row;
  position: fixed;
  height: 8%;
  width: 100%;
  border-bottom: 2px black solid;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

// export const NavItem = styled(NavLink)`
//   color: white;
//   text-decoration: none;
// `;

export const CenterContainer = styled(Flex)`
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export const NavProfileContainer = styled(Flex)`
  display: flex;
`;

// BEGIN SIDE BAR
export const NavigationContainer = styled.div`
  display: flex;
  position: fixed;
  top: 40%;
  left: 0;
  ${({ home }) =>
    home &&
    css`
      top: 10%;
    `}
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 20%;
  background-color: transparent;
  /* background-color: #111; */
`;

export const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  /* box-shadow: 0 15px 40px rgba(0, 0, 0, 1); */
  background-color: transparent;
  transform: translateX(-80%);
  ${({ home }) =>
    home &&
    css`
      transform: translateX(-65%);
    `}
`;

export const NavigationListItem = styled.li`
  position: relative;
  display: flex;
  list-style: none;
  font-size: 33px;
  padding: 15px;
  font-family: monospace;
  cursor: pointer;
  box-sizing: border-box;
  background-color: ${props => props.bgColor};
  transition: all 0.5s;
  text-align: left;
  /* color: white; */
  /* color: ${props => props.bgColor}; */
  text-decoration: none;

  span {
    color: ${props => props.bgColor};
    transition: all 0.5s;
  }

  p {
    margin-left: auto;
    color: white;
    transition: all 0.5s;
  }

  &:hover {
    /* color: ${gray}; */
    transform: translateX(80%);
    ${({ home }) =>
      home &&
      css`
        transform: translateX(65%);
      `}
  }

  &:hover span {
    color: white;
    transition: all 0.5s;
  }

  &:hover p{
    color: ${props => props.bgColor};
    transition: all 0.5s;
    /* transform: scale(1.1); */
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: #3fff00; */
    background-color: transparent;
    z-index: -1;

    /* transform: scaleY(0);
    transition: transform 0.5s;
    transform-origin: bottom; */
    /* transform: scale(1.1); */
    transition: transform 0.5s;
  }

  &:hover:before {
    /* transform: scale(1.1); */
    /* transform: scaleY(1);
    transition: transform 0.5s;
    transform-origin: top; */
  }

  /* &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #3fff00;
    z-index: -2;

    transform: scaleY(0);
    transition: transform 0.5s;
    transform-origin: bottom;
    filter: blur(20px);
  }

  &:hover:after {
    transform: scaleY(1);
    transition: transform 0.5s;
    transform-origin: top;
  } */
`;
