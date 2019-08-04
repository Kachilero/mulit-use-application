/**
 * Loads a Terminal instance
 *
 * This should probably handle the connection between the instance and Electron
 * */
import * as React from 'react';
import { XTerminal } from './terminal';
import Pipe from '../../../utility/pipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

interface IXtermRefs {
  [k: string]: any;
  xterm: XTerminal;
}

type TerminalControllerState = {
  isTerminalOpen: boolean;
};

type TerminalControllerProps = {};

const getInitState = (props: TerminalControllerProps) => {
  return {
    isTerminalOpen: false
  };
};

// Add on's array
const addons = ['fit'];

class TerminalController extends React.Component<
  TerminalControllerProps,
  TerminalControllerState
> {
  readonly state = getInitState(this.props);
  // ???
  componentWillUnmount(): void {
    this.refs.mainDeviceComponent.componentWillUnmount();
  }

  onFocusChange = focused => {
    if (focused)
      console.log(`We are now focused, maybe we should do something`);
    return;
  };

  onContextMenu = e => {
    // fires on right click, gives screen X & Y and client X & Y
  };

  openTerminal = () => {
    this.setState({
      isTerminalOpen: !this.state.isTerminalOpen
    });
  };

  refs: IXtermRefs;

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
    return (
      <div id="terminal-container">
        <Pipe>
          <Button variant="outline-info" onClick={this.openTerminal}>
            <FontAwesomeIcon icon={faTerminal} />
          </Button>
        </Pipe>
        {this.state.isTerminalOpen && (
          <div className="terminal__wrapper">
            <Button className="close-terminal" variant="info">
              X
            </Button>
            <XTerminal
              ref="xterm"
              onFocusChange={this.onFocusChange}
              addons={addons}
              onContextMenu={this.onContextMenu}
              value="Passed as a value"
            />
          </div>
        )
        /* END CONDITIONAL */
        }
      </div>
    );
  }
}

export default TerminalController;
