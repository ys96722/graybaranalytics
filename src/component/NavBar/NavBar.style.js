import styled from "styled-components"
import { Flex } from "../../style/grid"
import {
  midBlue,
  darkBlue,
  gray,
  midGray,
  darkGray
} from "../../style/constants"

export const NavBarContainer = styled(Flex)`
  flex-direction: row;
  position: fixed;
  width: 100%;
  height: 10%;
  min-height: fit-content;
  top: 0;
  left: 0;
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
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`

export const NavItem = styled.button`
  position: relative;
  background-color: transparent;
  height: 100%;
  font-weight: 600;
  font-size: 1em;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  color: white;
  transition: all 0.2s;
`

export const HoverList = styled.ul`
  display: none;
  opacity: 0;
  position: fixed;
  top: 10%;
  right: 109px;
  flex-direction: column;
  border: none;
  background-color: ${midBlue};
  transition: opacity 0.2s linear;

  &:hover {
    display: flex;
    ${NavItem} {
      &:hover {
        background-color: ${darkBlue};
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
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  color: white;
  transition: all 0.2s;
  &:hover {
    ${HoverList} {
      display: flex;
      opacity: 1;
    }
  }
`
