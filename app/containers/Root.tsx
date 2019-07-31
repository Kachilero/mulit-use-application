import * as React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Routes from '../Routes';
import { History } from 'history';

import ThemeProvider from '../components/HOC/themeProvider/ThemeProvider';

type Props = {
  store: any;
  history: History<any>;
};

export default class Root extends Component<Props> {
  render() {
    const { store, history } = this.props;
    console.log('Store: ');
    console.log(store.getState());
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider>
            <Routes />
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}
