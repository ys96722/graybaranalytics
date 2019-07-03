import React from "react";
import { ProfileContainer, CompanyLogo } from "./Profile.style";
import Logout from "../Logout/Logout";
import { FirebaseContext } from "../../firebase";

function Profile(props) {
  const { firebase } = React.useContext(FirebaseContext);

  return (
    <ProfileContainer>
      <CompanyLogo src={require("../../assets/Panduit.png")} />
      <Logout handleLogout={() => firebase.logout()} />
    </ProfileContainer>
  );
}

export default Profile;
