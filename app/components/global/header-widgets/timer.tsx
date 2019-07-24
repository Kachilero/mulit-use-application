/**
 * A simple timer that resides in the header
 *
 * Doesn't interact with any other components
 */
import * as React from 'react';
import Pipe from '../../utility/pipe';

interface timerState {}
interface timerProps {}

class Timer extends React.Component<timerProps, timerState> {
  state: timerState;
  constructor(props: timerProps) {
    super(props);
  }

  render() {
    const REACT_VERSION = React.version;
    return (
      <div>
        <Pipe>
          <h4 style={{ display: 'inline' }}>Timer</h4>
          <p style={{ display: 'inline' }}> Version: {REACT_VERSION}</p>
        </Pipe>
      </div>
    );
  }
}

export default Timer;
