/**
 * Creating our own custom dropdown toggle for the timer
 * */
import * as React from 'react';

interface timerToggleProps {
  onClick: (e: Event) => void;
}

class TimerToggle extends React.Component<timerToggleProps> {
  constructor(props: timerToggleProps, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick(e);
  }

  render():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | React.ReactNodeArray
    | React.ReactPortal
    | boolean
    | null
    | undefined {
    return (
      <a href="" onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

export default TimerToggle;
