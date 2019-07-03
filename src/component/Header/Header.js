import React from "react";
import { withRouter } from "react-router-dom";
import {
  NavigationContainer,
  NavigationList,
  NavigationListItem
} from "./Header.style";

import { lightBlue, midBlue, darkBlue, yellow } from "../../style/constants";

function Header(props) {
  return props.home ? (
    <NavigationContainer home>
      <NavigationList home>
        <NavigationListItem
          bgColor={yellow}
          onClick={() => props.fetch(0)}
          home={true}
          id="0"
        >
          <span id="0">Home</span>
          <p>H</p>
        </NavigationListItem>
      </NavigationList>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <NavigationList>
        <NavigationListItem
          bgColor={lightBlue}
          onClick={() => props.fetch(1)}
        >
          <span id="1">Sales</span>
          <p>S</p>
        </NavigationListItem>
        <NavigationListItem
          bgColor={midBlue}
          onClick={() => props.fetch(2)}
        >
          <span id="2">Investment</span>
          <p>In</p>
        </NavigationListItem>
        <NavigationListItem
          bgColor={darkBlue}
          onClick={() => props.fetch(3)}
        >
          <span id="3">Market Share</span>
          <p>M</p>
        </NavigationListItem>
      </NavigationList>
    </NavigationContainer>
  );
}

export default withRouter(Header);
