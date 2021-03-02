import tw, { GlobalStyles as TwinGlobalStyles } from "twin.macro";
import { createGlobalStyle } from "styled-components";

export const CustomGlobalStyles = createGlobalStyle`
  :root {
    --bg-primary: #202225;
    --bg-secondary: #2f3136;
    --text-primary: #eeeeee;
  }
  
  body {
    ${tw`bg-primary text-primary`}
  }
`;

const GlobalStyles: React.FC = () => {
  return (
    <>
      <TwinGlobalStyles />
      <CustomGlobalStyles />
    </>
  );
};

export default GlobalStyles;
