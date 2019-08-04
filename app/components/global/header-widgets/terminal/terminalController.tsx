/**
 * Loads a Terminal instance
 *
 * This should probably handle the connection between the instance and Electron
 * */
import * as React from 'react';
import { XTerminal, Terminal } from './terminal';
import * as pty from 'node-pty';
// import { ipcRenderer } from 'electron';
import * as os from 'os';

interface IXtermRefs {
  [k: string]: any;
  xterm: XTerminal;
}

const shell = process.env[os.platform() === 'win32' ? 'COMSPEC' : 'SHELL'];

const ptyProc = pty.spawn(shell, [], {
  name: 'React Terminal',
  cols: 80,
  rows: 30,
  cwd: process.cwd(),
  env: process.env
});

// Add on's array
const addons = ['fit'];

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

    term.on('data', (data: string) => {
      ptyProc.write(data);
    });
    ptyProc.on('data', data => {
      term.write(data);
    });
  }

  // We load a 'default' message/state here
  componentDidMount(): void {
    // this.runStartTerminal(this.refs.xterm);
  }

  // ???
  componentWillUnmount(): void {
    this.refs.mainDeviceComponent.componentWillUnmount();
  }

  onFocusChange = focused => {
    if (focused)
      console.log(`We are now focused, maybe we should do something`);
    return;
  };

  onInput = data => {
    // Fires every time input is added ie. every character
  };

  onContextMenu = e => {
    // fires on right click, gives screen X & Y and client X & Y
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
      <div
        id="terminal-container"
        style={{
          position: 'absolute',
          top: '0',
          left: '150px',
          overflow: 'scroll'
        }}
      >
        <XTerminal
          ref="xterm"
          onFocusChange={this.onFocusChange}
          onInput={this.onInput}
          addons={addons}
          onContextMenu={this.onContextMenu}
          value="Passed as a value"
        />
      </div>
    );
  }
}

export default TerminalController;
