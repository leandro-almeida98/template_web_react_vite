import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import "./App.css";
import Routes from "./routes/";
import { Suspense } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, blueTheme, darkTheme } from "./themes";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./redux/persistor";
type Theme = "light" | "dark" | "blue";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const App = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const handlerTheme = (theme: any) => {
    if (theme.includes("light")) return lightTheme;
    if (theme.includes("dark")) return darkTheme;
    if (theme.includes("blue")) return blueTheme;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={handlerTheme(theme)}>
            <GlobalStyles />
            <Routes />
            <ToastContainer />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
