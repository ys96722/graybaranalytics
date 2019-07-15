import React from "react"
import { FirebaseContext } from "../../firebase"
import distanceInWordsToNow from "date-fns/distance_in_words_to_now"
import {
  HomeContainer,
  BannerContainer,
  ContentContainer,
  ContentContainerColumn,
  ViewButton,
  LastLogin,
  ReportContainer,
  ReportFrame,
  LandingViewContainer,
  BannerMessageContainer,
  ContentContainerRow,
  ReportTitle
} from "./Home.style"
import NavBar from "../../component/NavBar/NavBar"
import Tableau from "../../component/Tableau/Tableau"

function Home(props) {
  const { user } = React.useContext(FirebaseContext)
  const [visibleIndex, setVisibleIndex] = React.useState(0)

  function fetchReport(i) {
    console.log("fetch")
    console.log(i)
    setVisibleIndex(i)
  }

  const reports = [
    <LandingViewContainer src={require("../../assets/cool.jpg")}>
      <BannerContainer
      // src={require("../../assets/graybar-electric-office.jpg")}
      // src={require("../../assets/cool.jpg")}
      // src={require("../../assets/dark.jpg")}
      >
        {/* <h1>{user && user.displayName}</h1> */}
        <BannerMessageContainer>
          <h1>Welcome to Graybar</h1>
          <h1>Advanced Data Services</h1>
          <LastLogin>
            Last Login{" "}
            {distanceInWordsToNow(user && user.metadata.lastSignInTime) +
              " ago"}
          </LastLogin>
        </BannerMessageContainer>
      </BannerContainer>
      {/* <ContentContainer>
        <ReportTitle>Available Reports</ReportTitle>
        <ContentContainerRow>
          <ContentContainerColumn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="85"
              height="85"
              viewBox="0 0 24 24"
            >
              <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            <h1>Sales Report</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ViewButton onClick={() => fetchReport(1)}>VIEW</ViewButton>
          </ContentContainerColumn>
          <ContentContainerColumn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="85"
              height="85"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z" />
            </svg>
            <h1>Investments Report</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ViewButton onClick={() => fetchReport(2)}>VIEW</ViewButton>
          </ContentContainerColumn>
          <ContentContainerColumn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="85"
              height="85"
              viewBox="0 0 24 24"
            >
              <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            <h1>Market Share Report</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ViewButton onClick={() => fetchReport(3)}>VIEW</ViewButton>
          </ContentContainerColumn>
        </ContentContainerRow>
      </ContentContainer> */}
    </LandingViewContainer>,
    <ReportContainer animation={true}>
      {/* <ReportFrame src="https://datastudio.google.com/embed/reporting/1WpxpyPIkFwOmTznBvkbSVQNBqK1BFWgG/page/Ml5p" /> */}
      <ReportFrame src="https://10az.online.tableau.com/t/graybarelectriccompanyinc/views/VendorDataPrototype-Sales/SalesExecutiveSummaryDashboard2?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link" />
    </ReportContainer>,
    <ReportContainer animation={true}>
      {/* <ReportFrame src="https://datastudio.google.com/embed/reporting/1-gbbNbHEaWTklQVy5BEEgmMSwRQfDAhf/page/LN4q" /> */}
      <ReportFrame src="https://10az.online.tableau.com/t/graybarelectriccompanyinc/views/VendorDataPrototype-Investment/InvestmentExecutiveSummaryDashboard2?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link" />
    </ReportContainer>,
    <ReportContainer animation={true}>
      {/* <ReportFrame src="https://datastudio.google.com/embed/reporting/1QNkTmEmYxEa6fLgh9-kymhNhasUik6nZ/page/rN4q" /> */}
      <ReportFrame src="https://10az.online.tableau.com/t/graybarelectriccompanyinc/views/VendorDataPrototype-MarketShare_002/MarketShareExecutiveDashboard?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link" />
    </ReportContainer>
  ]

  return (
    <HomeContainer>
      <NavBar fetchReport={fetchReport} />
      {reports[visibleIndex]}
    </HomeContainer>
  )
}

export default Home
