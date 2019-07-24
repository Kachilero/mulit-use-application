/**
 * Builds the custom dropdown for the timer
 * */
import * as React from 'react';
import { FormControl } from 'react-bootstrap';

interface timerMenuState {
  value: string;
}
interface timerMenuProps {
  changeHandler: (val: any) => void;
}

class TimerMenu extends React.Component<timerMenuProps, timerMenuState> {
  state: timerMenuState;
  constructor(props: timerMenuProps, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value.trim()
    });
    console.log(`TimerMenu: ${e.target.value} is a ${typeof e.target.value}`);
    this.props.changeHandler(e.target.value);
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
    const { value } = this.state;

    return (
      <div aria-labelledby="timerToggle" {...this.props}>
        <FormControl
          autoFocus
          type="number"
          className="mx-3 my-2 w-auto"
          placeholder="00:00:00"
          onChange={this.handleChange}
          value={value}
          {...this.props.changeHandler}
        />
        <ul className="list-unstyled">{children}</ul>
      </div>
    );
  }
}

export default TimerMenu;
