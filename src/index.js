import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { theme } from "./Theme";
import { configStore } from "./store/store";

const appTheme = theme;
const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider theme={appTheme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
