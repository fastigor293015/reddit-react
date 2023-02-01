import React from "react";
import { SkeletonTheme } from 'react-loading-skeleton';
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store/rootReducer";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function AppComponent() {
  return (
    <SkeletonTheme baseColor="#F3F3F3" highlightColor="#FFFFFF">
      <Provider store={store}>
        <Layout>
          <Header />
          <Content>
            <CardsList />
          </Content>
        </Layout>
      </Provider>
    </SkeletonTheme>

  )
}

// Вводим стрелочную функцию, чтобы AppComponent не преобразовывался в класс-компонент
export const App = hot(() => <AppComponent />);
