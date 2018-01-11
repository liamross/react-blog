import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { BlogBody } from './BlogBody/BlogBody';
import { Route, Switch } from 'react-router-dom';
import { history } from '../store';
import { PageName, isPageNameValid } from '../utilities/postUtils';
import { TopBar } from './TopBar/TopBar';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <div className="App__content">
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path='/' render={() => <div>Home</div>} />
              <Route exact path='/blogs' render={() => <div>Blog Picker</div>} />
              <Route path='/blogs/:pageName' render={(props) =>
                isPageNameValid(props.match.params.pageName)
                  ? <BlogBody pageName={props.match.params.pageName} />
                  : <div>NOT FOUND PAGE</div>
              } />
              <Route render={() => <div>NOT FOUND PAGE</div>} />
            </Switch>
          </ConnectedRouter>
        </div>
      </div>
    );
  }
}

export default App;
