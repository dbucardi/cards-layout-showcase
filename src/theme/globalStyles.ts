import { createGlobalStyle } from 'styled-components';

export const mediaQueries = {
  sm: 'only screen and (max-width: 767px)',
  md: 'only screen and (min-width: 768px) and (max-width: 991px)',
  lg: 'only screen and (min-width: 992px)',
};

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Fira Sans", sans-serif;
    font-size: 18px;
    color: var(--high-contrast-text);
    line-height: normal;
    background: var(--body-background);
    overflow: scroll;
    p{
      margin-bottom: 2rem;
      line-height: 1.5rem;
    }
    a{
      text-decoration: none;
      color: inherit;
    }
    h1, h2, h3, h4, h5, h6 {
      margin-top: 0px;
      font-family: var(--header-font-family);
    }
    h1{
      font-size: 160%;
      margin-bottom: 1rem;
      line-height: 120%;
    }
    h2{
      font-size: 130%;
      margin-bottom: 0.5rem;
      line-height: 110%;
    }
    h3{
      font-size: 110%;
      margin-bottom: 0.5rem;
      line-height: 110%;
    }
    h4{
      font-size: 100%;
      font-weight: normal;
      margin-bottom: 0.5rem;
      line-height: 1.5rem;
    }
    section{
      margin-top: 2rem;
      margin-bottom: 2rem;
    }

    @media ${mediaQueries.sm} {
      &{
        font-size: 16px;
      }
    }
  }
  html, html a, h1, h2, h3, h4, h5, h6, a, p, li, dl, th, dt, input, textarea, span, div {
    -webkit-font-smoothing: antialiased;
  }
`;
