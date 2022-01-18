import { createGlobalStyle } from 'styled-components';

export const ThemeStyles = createGlobalStyle`
  :root{
    --primary: #a2bfb7;
    --secondary: #adbf73;
    --dark: #212121;
    --light: #f3f3f3;
    --body-background: #FCD7AC;
    --high-contrast-text: rgb(40, 40, 40);
    --header-font-family: "Poppins", "sans-serif";

    *::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    *::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    *::-webkit-scrollbar-track {
      border-radius: 10px;
    }

    *::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: gray;
    }

    hr{
      border: 1px solid var(--high-contrast-text);
      background: var(--high-contrast-text);
    }
  }
`;
