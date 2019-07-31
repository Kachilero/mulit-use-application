/**
 * Theme Provider
 * */
import * as React from 'react';
import { ThemeContext } from './theme-context';

export default class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'purple',
      setColor: this.setColor.bind(this)
    };
  }

  setColor(color) {
    this.setState({ color });
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          //@ts-ignore
          themeContext: {
            ...this.state
          }
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
