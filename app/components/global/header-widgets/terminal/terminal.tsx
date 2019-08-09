/**
 * Creates a terminal instance
 * */
import * as React from 'react';
import { Terminal } from 'xterm';
import { debounce } from '../../../../utils/utils';
import * as pty from 'node-pty';
import * as os from 'os';

const classNames = require('classnames');

export interface IXtermProps extends React.DOMAttributes<{}> {
  onChange?: (e) => void;
  onInput?: (e) => void;
  onFocusChange?: Function;
  addons?: string[];
  onScroll?: (e) => void;
  onContextMenu?: (e) => void;
  options?: any;
  path?: string;
  value?: string;
  classNames?: string;
  style?: React.CSSProperties;
}

export interface IXtermState {
  isFocused: boolean;
}

const getInitState = (props: IXtermProps): IXtermState => {
  return {
    isFocused: true
  };
};

class XTerminal extends React.Component<IXtermProps, IXtermState> {
  xterm: Terminal;
  container: HTMLDivElement;
  ptyProc;
  readonly state = getInitState(this.props);

  // May remove this as this seems extra
  applyAddon(addon) {
    Terminal.applyAddon(addon);
  }

  // All the work to build the terminal gets done here
  componentDidMount(): void {
    // first we create a node-pty instance
    const shell = process.env[os.platform() === 'win32' ? 'COMSPEC' : 'SHELL'];
    this.ptyProc = pty.spawn(shell, [], {
      name: 'xterm',
      cols: 80,
      rows: 30,
      cwd: process.cwd(),
      env: process.env
    });
    // Create an XTerm instance with any passed options
    this.xterm = new Terminal(this.props.options);
    // If we passed props from the parent, we load them here
    if (this.props.addons) {
      this.props.addons.forEach(s => {
        const addon = require(`xterm/dist/addons/${s}/${s}.js`);
        this.applyAddon(addon);
      });
    }
    // we open the container
    this.xterm.open(this.container);
    // I think this applies the 'fit' addon to anything in the terminal
    (this.xterm as any).fit();
    // Now we bind all of the handle functions
    this.xterm.on('focus', this.focusChanged.bind(this, true));
    this.xterm.on('blur', this.focusChanged.bind(this, false));
    this.xterm.on('resize', this.resize.bind(this));
    window.onresize = () => {
      this.fitDebounce();
    };
    // NOTE: we need to just pass data back and forth or it'll print twice
    this.xterm.on('data', this.xtermData.bind(this));
    this.ptyProc.on('data', this.ptyData.bind(this));
    // If we get these from the parent we deal with them here
    if (this.props.onContextMenu) {
      this.xterm.element.addEventListener(
        'contextmenu',
        this.onContextMenu.bind(this)
      );
    }
    if (this.props.onInput) {
      this.xterm.on('data', this.onInput);
    }
    if (this.props.value) {
      this.xterm.writeln(this.props.value);
    }
  } // .componentDidMount

  componentWillUnmount(): void {
    // make sure we have a terminal, then kill it and the pty process
    if (this.xterm) {
      this.xterm.destroy();
      this.xterm = null;
      this.ptyProc.kill();
    }
  }

  // Currently only updates if the parent sends a new "value"
  shouldComponentUpdate(
    nextProps: Readonly<IXtermProps>,
    nextState: Readonly<IXtermState>,
    nextContext: any
  ): boolean {
    if (
      nextProps.hasOwnProperty('value') &&
      nextProps.value !== this.props.value
    ) {
      console.log(`Should TERMINAL UPDATE TRUE`);
      if (this.xterm) {
        this.xterm.clear();
        setTimeout(() => {
          this.xterm.write(nextProps.value);
        }, 0);
      }
    }
    return false;
  }

  xtermData(data) {
    this.ptyProc.write(data);
  }
  ptyData(data) {
    this.xterm.write(data);
  }
  getTerminal() {
    return this.xterm;
  }
  write(data: any) {
    this.xterm && this.xterm.write(data);
  }
  writeln(data: any) {
    this.xterm && this.xterm.writeln(data);
  }
  focus() {
    if (this.xterm) this.xterm.focus();
  }
  focusChanged(focused) {
    this.setState({
      isFocused: focused
    });
    this.props.onFocusChange && this.props.onFocusChange(focused);
  }
  onInput = data => {
    this.props.onInput && this.props.onInput(data);
  };
  fitDebounce = debounce(
    () => {
      (this.xterm as any).fit();
    },
    17,
    false
  );
  resize(cols: number, rows: number) {
    this.xterm && this.xterm.resize(Math.round(cols), Math.round(rows));
  }
  setOption(key: string, value: boolean) {
    this.xterm && this.xterm.setOption(key, value);
  }
  refresh() {
    this.xterm && this.xterm.refresh(0, this.xterm.rows - 1);
  }
  onContextMenu(e) {
    this.props.onContextMenu && this.props.onContextMenu(e);
  }

  // Now we Render
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
    const terminalClassName = classNames(
      'ReactXTerm',
      this.state.isFocused ? 'React-XTerm__focused' : null,
      this.props.classNames
    );

    return (
      <div ref={ref => (this.container = ref)} className={terminalClassName} />
    );
  }
}

export { Terminal, XTerminal };
