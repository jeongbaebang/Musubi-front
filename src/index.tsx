import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "@/App";
import { theme } from "@/theme";
import { checkUserStatus } from "@/lib";
import { rootReducer, rootSaga } from "@/modules";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
checkUserStatus(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
