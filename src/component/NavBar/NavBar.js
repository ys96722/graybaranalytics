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
  const [isHovered, setHovered] = React.useState(false)

  function handleHover() {
    setHovered(true)
    console.log(isHovered)
  }

  function handleExit() {
    setHovered(false)
    console.log(isHovered)
  }

  return (
    <NavBarContainer>
      <img
        src={require("../../assets/GraybarLogoWhite.PNG")}
        alt="logo"
        onClick={() => props.fetchReport(0)}
      />
      <NavItemContainer>
        <TriggerItem onMouseOver={handleHover} onMouseLeave={handleExit}>
          Reports
        </TriggerItem>
        <HoverList flag={isHovered}>
          <NavItem onClick={() => props.fetchReport(1)}>Sales</NavItem>
          <NavItem onClick={() => props.fetchReport(2)}>Investments</NavItem>
          <NavItem onClick={() => props.fetchReport(3)}>Market</NavItem>
        </HoverList>
        <NavItem onClick={() => firebase.logout()}>Logout</NavItem>
      </NavItemContainer>
    </NavBarContainer>
  )
}

export default NavBar
