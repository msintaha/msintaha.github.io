import React from 'react';

export default class OffClickWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleInsideClick = this.handleInsideClick.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleClick() {
    const { onOffClick } = this.props;

    if (this.isInsideClick) {
      this.isInsideClick = false;
    } else {
      onOffClick();
    }
  }

  handleInsideClick() {
    this.isInsideClick = true;
  }

  handleKeyup(event) {
    const { onOffClick } = this.props;

    if (event.key === 'Escape') {
      onOffClick();
    }
  }

  render() {
    const { children } = this.props;
    const child = React.Children.only(children);
    return React.cloneElement(child, { onClickCapture: this.handleInsideClick });
  }
}
