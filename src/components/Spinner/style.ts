import styled from "styled-components";

export const StyledSpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

export const StyledSpinnerText = styled.div`
  display: flex;
  align-items: center;
  font-family: var(--header-font-family);
  font-size: 20px;
  font-weight: 500;
  padding-left: 15px;
`;

export const StyledSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid var(--primary);
    border-color: var(--primary) transparent var(--primary) transparent;
    animation: spinner-animation 1.2s infinite;
  }

  @keyframes spinner-animation {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;