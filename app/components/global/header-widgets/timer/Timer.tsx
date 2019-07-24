/**
 * A simple timer that resides in the header
 *
 * Doesn't interact with any other components
 *
 * We need to use the 'global.setInterval' to get the correct type see
 * @link http://evanshortiss.com/development/nodejs/typescript/2016/11/16/timers-in-typescript.html
 */
import * as React from 'react';
import Pipe from '../../../utility/pipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonToolbar, Dropdown } from 'react-bootstrap';
import { numberOfDigits } from '../../../../utils/utils';

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
  private secondsRemaining: number;
  private intervalHandler: NodeJS.Timer;
  constructor(props: timerProps) {
    super(props);
    this.state = {
      sec: '00',
      min: '00',
      hour: '00',
      timer: 0
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.secondsRemaining;
    this.intervalHandler;
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  changeHandler(val) {
    const valLength = val.length;
    this.setState({ timer: val });
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

  startCountDown() {
    // See note in head if you're wondering about the global here
    this.intervalHandler = global.setInterval(this.tick, 1000);
    let time = this.state.timer;
    this.secondsRemaining = time;
    this.secondsRemaining--;
  }

  tick() {
    const timerLength = numberOfDigits(this.state.timer);
    const hours = Math.floor(this.secondsRemaining / 60 / 60);
    const min = Math.floor(this.secondsRemaining / 60);
    const sec = this.secondsRemaining - min * 60;

    if (min > 0 && min < 10) {
      this.setState({ sec: '0' + this.state.min });
    }
    if (min === 0 && sec === 0) {
      clearInterval(this.intervalHandler);
    }

    // Update the timer state
    this.setState({
      hour: hours.toString(),
      min: min.toString(),
      sec: sec.toString()
    });

    console.log(`Timer Length: ${timerLength}`);
    console.log(`Timer: ${hours}:${min}:${sec}`);
    this.secondsRemaining--;
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
                <Button variant="outline-primary" onClick={this.startCountDown}>
                  Up
                </Button>
                <Button variant="outline-info" onClick={this.startCountDown}>
                  Down
                </Button>
              </ButtonToolbar>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default Timer;
