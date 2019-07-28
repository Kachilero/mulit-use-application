/**
 * A simple timer that resides in the header
 *
 * Doesn't interact with any other components
 *
 * We need to use the 'global.setInterval' to get the correct type see
 * @link http://evanshortiss.com/development/nodejs/typescript/2016/11/16/timers-in-typescript.html
 */
import * as React from 'react';
import { Button, ButtonToolbar, Card, Dropdown } from 'react-bootstrap';
import MaskedInput from 'react-text-mask';
import createTimerMask from '../../../../utils/createTimerMask';
import Pipe from '../../../utility/pipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

interface timerState {
  sec: string;
  min: string;
  hour: string;
  timer: number;
  value: string;
  showMenu: boolean;
  timerIsRunning: boolean;
}
interface timerProps {}

class Timer extends React.Component<timerProps, timerState> {
  state: timerState;
  private numberMask: (rawValue: string) => string[];
  private mSecondsRemaining: number;
  private timerTarget: number;
  private intervalHandler: NodeJS.Timer;

  constructor(props: timerProps) {
    super(props);
    this.state = {
      sec: '00',
      min: '00',
      hour: '00',
      timer: 0,
      value: '',
      showMenu: false,
      timerIsRunning: false
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.mSecondsRemaining = 0;
    this.timerTarget = 0;
    this.intervalHandler;
    this.numberMask = createTimerMask();
  }

  // Override the default menu behaviour so it doesn't close when the input is clicked
  handleToggle(isOpen, event, metadata) {
    if (isOpen || metadata.source !== 'select') {
      this.setState({ showMenu: isOpen });
    }
    event.persist;
  }
  // Sets timer value
  changeHandler(val) {
    val = val.target.value.replace(/\D+/g, '');
    this.setState({ timer: val });
  }
  // Handles the timer
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
  // Starts timer
  startTimer(direction) {
    // get the timer
    const timer = this.state.timer;
    // If no timer set, return
    if (timer === 0) return;
    // Convert timer to string
    const stringTime = this.handleTimeConversion(timer);
    // Now we set the timer in the header
    this.setState({
      sec: stringTime.sec,
      min: stringTime.min,
      hour: stringTime.hour
    });
    // Reverse direction for a count up
    if (direction === 'up') {
      this.timerTarget = this.mSecondsRemaining;
      this.mSecondsRemaining = 0;
    }
    // Close the dropdown, and disable the buttons
    this.setState({
      showMenu: false,
      timerIsRunning: true
    });
    // Finally we call the tick function
    this.intervalHandler = global.setInterval(() => this.tick(direction), 1000);
  }
  // converts numbers to strings
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
  // handles counting and stop condition
  countDown() {
    this.mSecondsRemaining = this.mSecondsRemaining - 1;
    if (this.mSecondsRemaining === 0) {
      clearInterval(this.intervalHandler);
      this.setState({ timerIsRunning: false });
    }
  }
  // handles counting and stop condition
  countUp() {
    this.mSecondsRemaining = this.mSecondsRemaining + 1;
    if (this.mSecondsRemaining === this.timerTarget) {
      clearInterval(this.intervalHandler);
      this.setState({ timerIsRunning: false });
    }
  }
  // Reset all the things
  resetTimer() {
    console.log(`Reset Timer`);
    clearInterval(this.intervalHandler);
    this.setState({
      sec: '00',
      min: '00',
      hour: '00',
      timer: 0,
      value: '',
      timerIsRunning: false
    });
  }

  render() {
    const { sec, min, hour, showMenu, timerIsRunning } = this.state;
    const timerTitle = hour + ':' + min + ':' + sec;

    return (
      <div style={{ display: 'flex' }} className="no-spin-buttons">
        <Pipe>
          <FontAwesomeIcon icon={faStopwatch} />
        </Pipe>
        <Dropdown show={showMenu} onToggle={this.handleToggle}>
          <Dropdown.Toggle
            id="timer-button"
            className="d-inline-block"
            variant="outline-info"
          >
            {timerTitle}
          </Dropdown.Toggle>

          <Dropdown.Menu className="p-0">
            <Dropdown.Item>
              <Card>
                <Card.Body>
                  <MaskedInput
                    autoFocus
                    mask={this.numberMask}
                    className="my-2 w-auto"
                    placeholder="HH:MM:SS"
                    onChange={this.changeHandler}
                    style={{ textAlign: 'center' }}
                  />
                  <ButtonToolbar>
                    <Button
                      variant="outline-primary"
                      onClick={() => this.startTimer('up')}
                      disabled={timerIsRunning}
                    >
                      Up
                    </Button>
                    <Button
                      variant="outline-info"
                      onClick={() => this.startTimer('down')}
                      disabled={timerIsRunning}
                    >
                      Down
                    </Button>
                  </ButtonToolbar>
                  <Button
                    variant="danger"
                    size="lg"
                    onClick={this.resetTimer}
                    block
                  >
                    Reset
                  </Button>
                </Card.Body>
              </Card>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default Timer;
