import { createGlobalStyle } from 'styled-components';

export const ThemeStyles = createGlobalStyle`
  :root{
    --primary: #2F996D;
    --secondary: #A9D1C0;
    --dark: #212121;
    --light: #f3f3f3;
    --body-background: #F8F9FB;
    --high-contrast-text: rgb(40, 40, 40);
    --header-font-family: "Poppins", "sans-serif";
    --card-box-shadow: 0 10px 20px rgb(30 48 52 / 13%);

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
