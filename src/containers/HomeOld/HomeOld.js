import React from "react";
import { FirebaseContext } from "../../firebase";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import Header from "../../component/Header/Header";
import {
  HomeContainer,
  ReportContainer,
  ReportFrame,
  MainFrame,
  MainFrameHeaderArea,
  MainFrameHeader,
  MainFrameContentArea,
  NavButton,
  Column,
  ColumnHeader,
  Row,
  ColorLine
} from "./HomeOld.style";
import { lightBlue, midBlue, darkBlue } from "../../style/constants";
import Profile from "../../component/Profile/Profile";
// import { Redirect } from "react-router-dom";

function HomeOld(props) {
  const [visibleIndex, setVisibleIndex] = React.useState(0);

  const { user } = React.useContext(FirebaseContext);
  // const [authUser, setAuthUser] = React.useState(
  //   JSON.parse(localStorage.getItem("authUser"))
  // );

  function fetchReport(i) {
    console.log("fetch");
    console.log(i);
    setVisibleIndex(i);
  }

  const reports = [
    <ReportContainer animation={true}>
      <MainFrame>
        <MainFrameHeaderArea>
          <MainFrameHeader>GRAYBAR ADVANCED DATA SERVICES</MainFrameHeader>
        </MainFrameHeaderArea>
        <MainFrameContentArea style={{ padding: "50px" }}>
          <h1>Welcome {user && user.displayName}</h1>
          <h1 style={{ fontSize: "12px" }}>
            Last Signed In{" "}
            {distanceInWordsToNow(user && user.metadata.lastSignInTime) +
              " ago"}
          </h1>
          <p style={{ marginTop: "20px", fontSize: "18px", fontWeight: "500" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {console.log(user && user)}

          <ColumnHeader style={{ marginTop: "50px" }}>
            View Your Quarterly Reports
          </ColumnHeader>
          <ColorLine style={{ marginTop: "10px", marginBottom: "20px" }} />
          <Row>
            <Column>
              <NavButton
                onClick={() => fetchReport(1)}
                bgColor={lightBlue}
                id={1}
              >
                Sales Report
              </NavButton>
            </Column>
            <Column>
              <NavButton
                onClick={() => fetchReport(2)}
                bgColor={midBlue}
                id={2}
              >
                Investments Report
              </NavButton>
            </Column>
            <Column>
              <NavButton
                onClick={() => fetchReport(3)}
                bgColor={darkBlue}
                id={3}
              >
                Market Shares Report
              </NavButton>
            </Column>
          </Row>
        </MainFrameContentArea>
      </MainFrame>
    </ReportContainer>,
    <ReportContainer animation={true}>
      <ReportFrame src="https://datastudio.google.com/embed/reporting/1WpxpyPIkFwOmTznBvkbSVQNBqK1BFWgG/page/Ml5p" />
    </ReportContainer>,
    <ReportContainer animation={true}>
      <ReportFrame src="https://datastudio.google.com/embed/reporting/1-gbbNbHEaWTklQVy5BEEgmMSwRQfDAhf/page/LN4q" />
    </ReportContainer>,
    <ReportContainer animation={true}>
      <ReportFrame src="https://datastudio.google.com/embed/reporting/1QNkTmEmYxEa6fLgh9-kymhNhasUik6nZ/page/rN4q" />
    </ReportContainer>
  ];

  return (
    <HomeContainer>
      <Header fetch={fetchReport} home={true} />
      <Header fetch={fetchReport} />
      <Profile />
      {reports[visibleIndex]}
    </HomeContainer>
  );
}

export default HomeOld;
