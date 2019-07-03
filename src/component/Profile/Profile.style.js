import styled from "styled-components";
import { Flex } from "../../style/grid";
import { desktopPadding } from "../../style/constants";

export const ProfileContainer = styled(Flex)`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 5%;
  height: 100%;
  right: 0;
  top: 0;
  padding: ${desktopPadding} / 2;
  background-color: white;
  justify-content: flex-start;
  align-items: center;
  border-left: 3px solid black;
`;

export const CompanyLogo = styled.img`
  position: relative;
  width: 100%;
  height: 5%;
`;
