import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';

import { history } from '../store';
import { isPageNameValid } from '../utilities/postUtils';

import TopBar from './TopBar/TopBar';
import BlogBody from './BlogBody/BlogBody';
import PageNotFound from './PageNotFound/PageNotFound';
import SiteHome from './BlogHome/BlogHome';
import { PATH } from '../utilities/routeUtils';

import './App.scss';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="App__content">
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path={`${PATH}/`} render={() => <SiteHome />} />
            <Route
              path={`${PATH}/:pageName`}
              render={routeProps => (
                      isPageNameValid(routeProps.match.params.pageName)
                          ? <BlogBody
                            pageName={routeProps.match.params.pageName}
                          />
                          : <PageNotFound />)}
            />
            <Route render={() => <PageNotFound />} />
          </Switch>
        </ConnectedRouter>
      </div>
    </div>
  );
}

export default App;
