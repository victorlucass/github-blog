import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { RoutesApp } from "./Routes";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <RoutesApp></RoutesApp>
      </ThemeProvider>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
