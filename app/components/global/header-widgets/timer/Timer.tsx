/**
 * A simple timer that resides in the header
 *
 * Doesn't interact with any other components
 *
 * We need to use the 'global.setInterval' to get the correct type see
 * @link http://evanshortiss.com/development/nodejs/typescript/2016/11/16/timers-in-typescript.html
 */
import * as React from 'react';
import { Button, ButtonToolbar, Dropdown } from 'react-bootstrap';
import Pipe from '../../../utility/pipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

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
  private mSecondsRemaining: number;
  private timerTarget: number;
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
    this.mSecondsRemaining = 0;
    this.timerTarget = 0;
    this.intervalHandler;
  }

  changeHandler(val) {
    val = val.replace(/\D+/g, '');
    console.log(`Changed Val: ${val}`);
    this.setState({ timer: val });
  }

  tick(direction) {
    // going up or down
    if (direction === 'down') {
      this.countDown();
    } else {
      this.countUp();
    }
    const stringTime = this.handleTimeConversion(this.mSecondsRemaining);
    this.setState({
      sec: stringTime.sec,
      min: stringTime.min,
      hour: stringTime.hour
    });
  }

  startTimer(direction) {
    // get the timer
    const timer = this.state.timer;
    const stringTime = this.handleTimeConversion(timer);
    // Now we set the timer in the header
    this.setState({
      sec: stringTime.sec,
      min: stringTime.min,
      hour: stringTime.hour
    });
    if (direction === 'up') {
      this.timerTarget = this.mSecondsRemaining;
      this.mSecondsRemaining = 0;
    }
    // Finally we call the tick function
    this.intervalHandler = global.setInterval(() => this.tick(direction), 1000);
  }

  handleTimeConversion(passedTime) {
    const timer = passedTime;
    // timer parts
    let timerSec: number, timerMin: number, timerHour: number;
    // timer strings
    let tSecString: string, tMinString: string, tHourString: string;
    // split it up so we can make sure it follows time constraints.
    // Since they're originally Numbers, I need to convert them to strings to cut them up
    timerSec = Number(timer.toString().substring(timer.toString().length - 2));
    let minString: string = timer
      .toString()
      .substring(timer.toString().length - 4);
    timerMin = Number(
      minString.replace(
        timer.toString().substring(timer.toString().length - 2),
        ''
      )
    );
    timerHour = Number(
      timer
        .toString()
        .replace(timer.toString().substring(timer.toString().length - 4), '')
    );
    // If more than 60 seconds we add them to minutes
    if (timerSec > 60) {
      timerSec = timerSec % 60;
      timerMin++;
    }
    // If more than 60 minutes we add them to hours
    if (timerMin > 60) {
      timerMin = timerMin % 60;
      timerHour++;
    }
    // Now we make timer equal the new amount in seconds
    const tempHour = timerHour * 60 * 60;
    const tempMin = timerMin * 60;
    this.mSecondsRemaining = tempHour + tempMin + timerSec;
    // First we'll make sure our parts look nice and are strings
    tSecString =
      timerSec < 10 ? '0' + timerSec.toString() : timerSec.toString();
    tMinString =
      timerMin < 10 ? '0' + timerMin.toString() : timerMin.toString();
    tHourString =
      timerHour < 10 ? '0' + timerHour.toString() : timerHour.toString();
    return {
      sec: tSecString,
      min: tMinString,
      hour: tHourString
    };
  }

  countDown() {
    this.mSecondsRemaining = this.mSecondsRemaining - 1;
    if (this.mSecondsRemaining === 0) clearInterval(this.intervalHandler);
  }

  countUp() {
    this.mSecondsRemaining = this.mSecondsRemaining + 1;
    if (this.mSecondsRemaining === this.timerTarget) {
      clearInterval(this.intervalHandler);
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
                <Button
                  variant="outline-primary"
                  onClick={() => this.startTimer('up')}
                >
                  Up
                </Button>
                <Button
                  variant="outline-info"
                  onClick={() => this.startTimer('down')}
                >
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
