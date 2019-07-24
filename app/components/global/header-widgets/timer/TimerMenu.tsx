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
    let val = e.target.value.trim();
    val = val.replace(/[\W\s\._\-]+/g, '');
    const split = 2;
    const chunk = [];
    for (let i = 0, len = val.length; i < len; i += split) {
      chunk.push(val.substr(i, split));
    }
    const formattedString = chunk.join(':');
    console.log(`Chunky: ${formattedString}`);

    this.setState({
      value: val
    });
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
