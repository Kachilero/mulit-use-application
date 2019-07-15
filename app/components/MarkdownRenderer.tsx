/**
 * This component will render markdown files passed to it
 */
import * as React from 'react';
import { Component } from 'react';
import ReactMarkdown from 'react-markdown';

type State = {
  markdown: string;
};
type Props = {
  mdFilePath: string;
};

class MarkdownRenderer extends Component<Props, State> {
  state: State;
  constructor(props: Props) {
    super(props);
    this.state = {
      markdown: ''
    };
  }

  componentWillMount(): void {
    // Get the contents from the Markdown file and put them in the React state,
    // so we can reference it in render() below.
    fetch(`../app/content/markdown/${this.props.mdFilePath}`)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return <ReactMarkdown source={markdown} />;
  }
}

export default MarkdownRenderer;
