import * as React from 'react';
import Header from '../components/global/Header';

export default class App extends React.Component {
  render() {
    const { children } = this.props;
    // return <React.Fragment>{children}</React.Fragment>;
    return (
      <div id="main-wrapper">
        <Header />
        <React.Fragment>{children}</React.Fragment>
      </div>
    );
  }
}
