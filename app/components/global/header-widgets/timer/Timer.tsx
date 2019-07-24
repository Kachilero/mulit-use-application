/**
 * A simple timer that resides in the header
 *
 * Doesn't interact with any other components
 */
import * as React from 'react';
import Pipe from '../../../utility/pipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap';

import TimerToggle from './TimerToggle';
import TimerMenu from './TimerMenu';

interface timerState {
  sec: string;
  min: string;
  hour: string;
}
interface timerProps {}

class Timer extends React.Component<timerProps, timerState> {
  state: timerState;
  constructor(props: timerProps) {
    super(props);
    this.state = {
      sec: '00',
      min: '00',
      hour: '00'
    };
  }

  render() {
    const timerTitle =
      this.state.hour + ':' + this.state.min + ':' + this.state.sec;
    return (
      <div style={{ display: 'flex' }}>
        <Pipe>
          <FontAwesomeIcon icon={faStopwatch} />
        </Pipe>
        <Dropdown>
          <Dropdown.Toggle
            as={TimerToggle}
            id="timer-button"
            className="d-inline-block"
          >
            {timerTitle}
          </Dropdown.Toggle>

          <Dropdown.Menu as={TimerMenu}>
            <Dropdown.Item as="button" eventKey="1">
              Up
            </Dropdown.Item>
            <Dropdown.Item as="button" eventKey="2">
              Down
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default Timer;
