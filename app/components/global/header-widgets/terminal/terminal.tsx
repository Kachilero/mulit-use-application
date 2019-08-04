/**
 * Creates a terminal instance
 * */
import * as React from 'react';
import { Terminal } from 'xterm';

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
  readonly state = getInitState(this.props);

  // May remove this as this seems extra
  applyAddon(addon) {
    Terminal.applyAddon(addon);
  }

  componentDidMount(): void {
    if (this.props.addons) {
      this.props.addons.forEach(s => {
        const addon = require(`xterm/dist/addons/${s}/${s}.js`);
        Terminal.applyAddon(addon);
      });
    }
    this.xterm = new Terminal(this.props.options);
    this.xterm.open(this.container);
    this.xterm.on('focus', this.focusChanged.bind(this, true));
    this.xterm.on('blur', this.focusChanged.bind(this, false));
    if (this.props.onContextMenu) {
      this.xterm.element.addEventListener(
        'contextmenu',
        this.onContexMenu.bind(this)
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
    if (this.xterm) {
      this.xterm.destroy();
      this.xterm = null;
    }
  }

  // May or may not need this
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
  resize(cols: number, rows: number) {
    this.xterm && this.xterm.resize(Math.round(cols), Math.round(rows));
  }
  setOption(key: string, value: boolean) {
    this.xterm && this.xterm.setOption(key, value);
  }
  refresh() {
    this.xterm && this.xterm.refresh(0, this.xterm.rows - 1);
  }
  onContexMenu(e) {
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
