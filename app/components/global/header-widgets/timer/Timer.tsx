/**
 * A simple timer that resides in the header
 *
 * Doesn't interact with any other components
 */
import * as React from 'react';
import Pipe from '../../../utility/pipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonToolbar, Dropdown } from 'react-bootstrap';

import TimerToggle from './TimerToggle';
import TimerMenu from './TimerMenu';

interface timerState {
  sec: string;
  min: string;
  hour: string;
  timer: number;
}
interface timerProps {}

class Timer extends React.Component<timerProps, timerState> {
  state: timerState;
  constructor(props: timerProps) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.state = {
      sec: '00',
      min: '00',
      hour: '00',
      timer: 0
    };
  }

  changeHandler(val) {
    const valLength = val.length;
    console.log(`Value Length: ${valLength} Typeof: ${typeof valLength}`);
    console.log(`Value itself is ${typeof val}`);
    switch (valLength) {
      case 1:
        this.setState({ sec: '0' + val });
        break;
      case 2:
        this.setState({ sec: val });
        break;
      case 3:
        this.setState({
          sec: val.slice(1, 3),
          min: '0' + val.slice(0, 1)
        });
        break;
      case 4:
        this.setState({
          sec: val.slice(2, valLength),
          min: val.slice(0, 2)
        });
        break;
      case 5:
        this.setState({
          sec: val.slice(3, valLength),
          min: val.slice(1, 3),
          hour: '0' + val.slice(0, 1)
        });
      case 6:
      default:
        this.setState({
          sec: val.slice(-2, valLength),
          min: val.slice(-4, -2),
          hour: val.slice(0, -4)
        });
        break;
    }
  }

  render() {
    const timerTitle =
      this.state.hour + ':' + this.state.min + ':' + this.state.sec;

    return (
      <div style={{ display: 'flex' }} className="no-spin-buttons">
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

          <Dropdown.Menu as={TimerMenu} changeHandler={this.changeHandler}>
            <Dropdown.Item>
              <ButtonToolbar>
                <Button variant="outline-primary">Up</Button>
                <Button variant="outline-info">Down</Button>
              </ButtonToolbar>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default Timer;
