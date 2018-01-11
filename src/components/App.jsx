import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import { BlogBody } from './BlogBody/BlogBody';
import { history } from '../store';
import { isPageNameValid } from '../utilities/postUtils';
import { TopBar } from './TopBar/TopBar';

import './App.scss';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="App__content">
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" render={() => <div>Home</div>} />
            <Route
              exact
              path="/blogs"
              render={() => <div>Blog Picker</div>}
            />
            <Route
              path="/blogs/:pageName"
              render={routeProps => (
                      isPageNameValid(routeProps.match.params.pageName)
                          ? <BlogBody
                            pageName={routeProps.match.params.pageName}
                          />
                          : <div>NOT FOUND PAGE</div>
                  )}
            />
            <Route render={() => <div>NOT FOUND PAGE</div>} />
          </Switch>
        </ConnectedRouter>
      </div>
    </div>
  );
}

export default App;
