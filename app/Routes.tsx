import * as React from 'react';
import { Switch, Route } from 'react-router';
const routes = require('./constants/routes.json');
import App from './containers/App';
import HomePage from './containers/HomePage';

import Admin from './layouts/Admin';
import AboutPage from './containers/AboutPage.container';
import OGHome from './components/OgHome';
import CounterPage from './containers/CounterPage';

export const adminRoutes = [
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    layout: '/admin'
  },
  {
    path: '/home',
    name: 'Home',
    component: OGHome,
    layout: '/admin'
  },
  {
    path: '/counter',
    name: 'Counter',
    component: CounterPage,
    layout: '/admin'
  }
];

export default () => (
  <App>
    <Switch>
      <Route path={routes.ABOUT} component={AboutPage} />
      <Route path={routes.ADMIN} component={Admin} />
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
