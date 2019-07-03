import styled, { css, keyframes } from "styled-components";

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInAni = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20%)
  }

  100% {
    opacity: 1;
    transform: translateY(0)
  }
`

export const Div = styled.div`
  ${({ animation }) =>
    animation &&
    css`
      animation: 1s ease-in-out 0s 1 ${slideIn};
    `}

    ${({ fadeIn }) =>
    fadeIn &&
    css`
      animation: 1s ease-in-out 0s 1 ${fadeInAni};
    `}

  ${({ position }) =>
    position &&
    css`
      position: ${position};
    `}

  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${marginBottom};
    `}

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `}

  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${marginRight};
    `}

  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft};
    `}

    ${({ width }) =>
      width &&
      css`
        width: ${width};
      `}

      ${({ textAlign }) =>
        textAlign &&
        css`
          text-align: ${textAlign};
        `}
`;

export const Flex = styled(Div)`
  display: flex;

  ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${direction};
    `}

   ${({ justify }) =>
     justify &&
     css`
       justify-content: ${justify};
     `}

   ${({ align }) =>
     align &&
     css`
       align-items: ${align};
     `}
`;

export const H1 = styled.h1``;

export const H2 = styled.h2`
  font-size: 30px;
`;

export const H4 = styled.h4`
  font-size: 15px;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
  text-align: left;
`;
