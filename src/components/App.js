import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import FictionPage from './FictionPage/FictionPage';
import { Route, Switch } from 'react-router-dom';
import { history } from '../store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>TOP BAR</div>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/fiction" component={FictionPage} />
              <Route render={() => <div>NOT FOUND PAGE</div>} />
            </Switch>
          </ConnectedRouter>
      </div>
    );
  }
}

export default App;
