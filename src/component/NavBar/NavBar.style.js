import styled, { css } from "styled-components"
import { Flex } from "../../style/grid"
import { midBlue, gray, midGray, darkGray } from "../../style/constants"

export const NavBarContainer = styled(Flex)`
  flex-direction: row;
  position: fixed;
  width: 100%;
  height: 10%;
  min-height: fit-content;
  top: 0;
  left: 0;
  /* justify-content: center; */
  align-items: center;
  background-color: ${midBlue};
  padding-left: 40px;
  padding-right: 40px;

  /* Logo */
  img {
    margin-right: auto;
    width: 180px;
    height: 70px;
    cursor: pointer;

    transition: all 0.2s;
    transform: scale(0.95);
    &:hover {
      transform: scale(1);
    }
  }
`

export const NavItemContainer = styled(Flex)`
  flex-direction: row;
  /* padding: 10px; */
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  h1 {
    margin-left: 10px;
    margin-right: 10px;
    color: white;
  }
`

export const NavItem = styled.button`
  position: relative;
  /* margin-top: auto;
  margin-bottom: 20px;
  height: 5%; */
  background-color: transparent;
  font-weight: 600;
  font-size: 1em;
  /* border-radius: 15px; */
  padding: 20px;
  margin-left: 5px;
  margin-right: 5px;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  color: white;

  /* transform-origin: right; */
  transition: all 0.2s;
  /* color: ${midGray}; */
  color: white;

  &:hover {
    color: ${midGray};
    transform: scale(1.1);
  }
`

export const HoverList = styled.ul`
  display: none;
  opacity: 0;
  position: fixed;
  top: 10%;
  right: 120px;
  flex-direction: column;
  border: none;
  background-color: ${midBlue};
  transition: opacity 0.2s linear;
  z-index: 22;
  height: fit-content;

  ${({ flag }) =>
    flag &&
    css`
      display: flex;
      opacity: 1;
    `}

  &:hover {
    display: flex;
    opacity: 1;
    ${NavItem} {
      &:hover {
        background-color: ${midGray};
        color: black;
      }
    }
  }

  /* text-align: left; */
`

export const TriggerItem = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
  height: 100%;
  background-color: transparent;
  font-weight: 600;
  font-size: 1em;
  padding: 10px;
  margin-left: 5px;
  margin-right: 5px;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  color: white;

  /* transform-origin: right; */
  transition: all 0.2s;
  /* color: ${midGray}; */
  color: white;
  &:hover {
    color: ${midGray};
    transform: scale(1.1);
    ${HoverList} {
      display: flex;
      opacity: 1;
    }
  }
`
