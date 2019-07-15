/**
 * These Routes pertain to the homepage
 *
 * TODO: change these so they take a string for the component and then load it.
 */
import { LayoutRoutes } from '../../Routes';

// Components
import About from '../../components/About';
import OgHome from '../../components/OgHome';
import Counter from '../../components/Counter';

export const homeRoutes: LayoutRoutes[] = [
  {
    path: '/home',
    name: 'Home',
    component: OgHome,
    layout: '/home',
    icon: ''
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    layout: '/home',
    icon: ''
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter,
    layout: '/home',
    icon: ''
  }
];
