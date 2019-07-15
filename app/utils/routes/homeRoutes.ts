/**
 * These Routes pertain to the homepage
 *
 * TODO: change these so they take a string for the component and then load it.
 */
import { LayoutRoutes } from '../../Routes';

// Components
import About from '../../views/home/About';
import Home from '../../views/home/Home';
import ReactMarkdown from '../../views/home/ReactMarkdown';

export const homeRoutes: LayoutRoutes[] = [
  {
    path: '/home',
    name: 'Welcome',
    component: Home,
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
    path: '/react-markdown',
    name: 'React Markdown',
    component: ReactMarkdown,
    layout: '/home',
    icon: ''
  }
];
