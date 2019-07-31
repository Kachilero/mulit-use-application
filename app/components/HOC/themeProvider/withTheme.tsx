/**
 * withTheme HOC
 * Let's us use 'export withTheme(AnyComponent) to inject our theme context
 * ('themeContext' props) in any component
 */
import * as React from 'react';
import { ThemeContext } from './theme-context';

export function withTheme(Component) {
  return function ThemeComponent(props) {
    return (
      <ThemeContext.Consumer>
        {contexts => <Component {...props} {...contexts} />}
      </ThemeContext.Consumer>
    );
  };
}
