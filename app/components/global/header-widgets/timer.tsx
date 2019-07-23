/**
 * A simple timer that resides in the header
 *
 * Doesn't interact with any other components
 */
import * as React from 'react';

interface timerState {}
interface timerProps {}

class Timer extends React.Component<timerProps, timerState> {
  state: timerState;
  constructor(props: timerProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Timer</h4>
      </div>
    );
  }
}

export default Timer;
