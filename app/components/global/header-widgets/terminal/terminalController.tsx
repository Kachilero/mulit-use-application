/**
 * Loads a Terminal instance
 * */
import * as React from 'react';
import { XTerminal, Terminal } from './terminal';

interface IXtermRefs {
  [k: string]: any;
  xterm: XTerminal;
}

class TerminalController extends React.Component {
  runStartTerminal(xterm: XTerminal) {
    const term: Terminal = xterm.getTerminal();
    var shellPropmt = '$ ';

    function prompt() {
      xterm.write('\r\n' + shellPropmt);
    }

    xterm.writeln('Welcome, This seems to have worked!!!');
    xterm.writeln('');
    prompt();

    term.on('key', function(key, ev) {
      let printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;
      if (ev.keyCode === 13) {
        prompt();
      } else if (printable) {
        xterm.write(key);
      }
    });
  }

  // We load a 'default' message/state here
  componentDidMount(): void {
    this.runStartTerminal(this.refs.xterm);
  }

  // ???
  componentWillUnmount(): void {
    this.refs.mainDeviceComponent.componentWillUnmount();
  }

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
    return <XTerminal ref="xterm" />;
  }
}

export default TerminalController;
