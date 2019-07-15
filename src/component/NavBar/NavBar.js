import React from "react"
import {
  NavBarContainer,
  NavItemContainer,
  NavItem,
  HoverList,
  TriggerItem
} from "./NavBar.style"
import { FirebaseContext } from "../../firebase"

function NavBar(props) {
  const { firebase } = React.useContext(FirebaseContext)
  return (
    <NavBarContainer>
      <img
        src={require("../../assets/GraybarLogoWhite.PNG")}
        alt="logo"
        onClick={() => props.fetchReport(0)}
      />
      <NavItemContainer>
        <TriggerItem>
          Reports
          <HoverList>
            <NavItem onClick={() => props.fetchReport(1)}>Sales</NavItem>
            <NavItem onClick={() => props.fetchReport(2)}>Investments</NavItem>
            <NavItem onClick={() => props.fetchReport(3)}>Market</NavItem>
          </HoverList>
        </TriggerItem>
        <NavItem onClick={() => firebase.logout()}>Logout</NavItem>
      </NavItemContainer>
    </NavBarContainer>
  )
}

export default NavBar
