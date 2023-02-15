import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import "./App.css";
import Routes from "./routes/";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, blueTheme, darkTheme } from "./themes";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./redux/persistor";
type Theme = "light" | "dark" | "blue";
// import store from "./redux/store";

const App = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const handlerTheme = (theme: any) => {
    if (theme.includes("light")) return lightTheme;
    if (theme.includes("dark")) return darkTheme;
    if (theme.includes("blue")) return blueTheme;
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={handlerTheme(theme)}>
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
