import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import { SkeletonTheme } from 'react-loading-skeleton';

import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { Post } from "./shared/Post";
import { PageNotFound } from "./shared/PageNotFound";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store/rootReducer";

import './main.global.css';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function AppComponent() {
  const [mounted, setMounted]= useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <SkeletonTheme baseColor="#F3F3F3" highlightColor="#FFFFFF">
      <Provider store={store}>
        {mounted && (
          <BrowserRouter>
            <Layout>
              <Header />
              <Content>

                <Switch>
                  <Route path="/" exact>
                    <Redirect to="/posts" />
                  </Route>
                  <Route path="/auth">
                    <Redirect to="/posts" />
                  </Route>
                  <Route path="/posts" exact>
                    <CardsList />
                  </Route>
                  <Route path="/posts/:subreddit/:postId">
                    <CardsList />
                    <Post />
                  </Route>
                  <Route path="*">
                    <PageNotFound />
                  </Route>
                </Switch>
              </Content>
            </Layout>
          </BrowserRouter>
        )}
      </Provider>
    </SkeletonTheme>

  )
}

// Вводим стрелочную функцию, чтобы AppComponent не преобразовывался в класс-компонент
export const App = hot(() => <AppComponent />);
