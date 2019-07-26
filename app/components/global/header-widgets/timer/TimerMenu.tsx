/**
 * Builds the custom dropdown for the timer
 * */
import * as React from 'react';
import { Form } from 'react-bootstrap';
import MaskedInput from 'react-text-mask';
import createTimerMask from '../../../../utils/createTimerMask';

interface timerMenuState {
  value: string;
}
interface timerMenuProps {
  changeHandler: (val: any) => void;
}

class TimerMenu extends React.Component<timerMenuProps, timerMenuState> {
  state: timerMenuState;
  private lastValue: string;
  constructor(props: timerMenuProps, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }
  // init the mask
  numberMask = createTimerMask();

  handleChange(e) {
    if (this.lastValue !== e.target.value) {
      this.lastValue = e.target.value;
      this.props.changeHandler(e.target.value);
    }
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
    const { children } = this.props;

    return (
      <div aria-labelledby="timerToggle" {...this.props}>
        <Form.Group controlId="timeInput">
          <MaskedInput
            autoFocus
            mask={this.numberMask}
            className="mx-3 my-2 w-auto"
            placeholder="HH:MM:SS"
            onChange={this.handleChange}
            style={{ textAlign: 'center' }}
          />
          <ul className="list-unstyled">
            <React.Fragment>{children}</React.Fragment>
          </ul>
        </Form.Group>
      </div>
    );
  }
}

export default TimerMenu;
