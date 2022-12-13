import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { InitialEntry } from "@remix-run/router";
import { Provider } from "react-redux";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { RootState, store } from "../redux/store";
import { uiReducer } from "../redux/features/uiSlice/uiSlice";
import mainTheme from "../styles/mainTheme";
import GlobalStyle from "../styles/GlobalStyles";
import { userReducer } from "../redux/features/userSlice/userSlice";
import { graffitiReducer } from "../redux/features/graffitiSlice/graffitiSlice";

interface ExtendedRenderOptions extends RenderOptions {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
  theme?: DefaultTheme;
  initialEntries?: InitialEntry[];
}

interface ExtendedPropsWithChildren extends PropsWithChildren {
  initialEntries?: InitialEntry[];
}

const Router = ({
  children,
  initialEntries,
}: ExtendedPropsWithChildren): JSX.Element => {
  return initialEntries ? (
    <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
  ) : (
    <BrowserRouter>{children}</BrowserRouter>
  );
};

const renderWithProviders = (
  ui: React.ReactElement,
  {
    initialEntries,
    preloadedState,
    store = configureStore({
      reducer: { ui: uiReducer, user: userReducer, graffiti: graffitiReducer },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <Router initialEntries={initialEntries}>
        <Provider store={store}>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </Provider>
      </Router>
    );
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
