/**
 * A simple timer that resides in the header
 *
 * Doesn't interact with any other components
 *
 * We need to use the 'global.setInterval' to get the correct type see
 * @link http://evanshortiss.com/development/nodejs/typescript/2016/11/16/timers-in-typescript.html
 */
import * as React from 'react';
import 'moment-timer';
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
  }

  changeHandler(val) {
    val = val.replace(/\D+/g, '');
    console.log(`Changed Val: ${val}`);
    this.setState({ timer: val });
  }

  startTimer(direction) {
    // get the timer
    const timer = this.state.timer;
    // split it up so we can make sure it follows time constraints.
    // Since they're originally Numbers, I need to convert them to strings to cut them up
    let timerSec = Number(
      timer.toString().substring(timer.toString().length - 2)
    );
    let minString = timer.toString().substring(timer.toString().length - 4);
    let timerMin = Number(
      minString.replace(
        timer.toString().substring(timer.toString().length - 2),
        ''
      )
    );
    let timerHour = Number(
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
    timerHour = timerHour * 60 * 60;
    timerMin = timerMin * 60;
    let tempTime = timerHour + timerMin + timerSec;

    console.log(`Timer String: ${timerHour} => ${timerMin} => ${timerSec}`);
    console.log(`Temp Time: ${tempTime}`);

    // @ts-ignore
    // let timerValue = moment.duration(momentVal, 'seconds').timer(() => { console.log(`Timer callback`); });
    // console.log(`Timer Duration: ${timerValue.getDuration()} Val: ${val}`);
    console.log(`State Timer going ${direction}`);
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
