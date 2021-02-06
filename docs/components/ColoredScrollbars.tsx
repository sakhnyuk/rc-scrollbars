import React, { Component, HTMLAttributes } from 'react';
import { Scrollbars, ScrollValues } from 'rc-scrollbars';

type State = {
  top: number;
};

export default class ColoredScrollbars extends Component {
  state: State;

  constructor(props) {
    super(props);
    this.state = { top: 0 };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.renderView = this.renderView.bind(this);
    this.renderThumb = this.renderThumb.bind(this);
  }

  handleUpdate = (values: ScrollValues) => {
    const { top } = values;
    this.setState({ top });
  };

  renderView = ({ style, ...props }: HTMLAttributes<HTMLDivElement>) => {
    const { top } = this.state;
    const viewStyle = {
      padding: 15,
      backgroundColor: `rgb(${Math.round(255 - top * 255)}, ${Math.round(top * 255)}, ${Math.round(
        255,
      )})`,
      color: `rgb(${Math.round(255 - top * 255)}, ${Math.round(255 - top * 255)}, ${Math.round(
        255 - top * 255,
      )})`,
    };
    return <div className="box" style={{ ...style, ...viewStyle }} {...props} />;
  };

  renderThumb = ({ style, ...props }: HTMLAttributes<HTMLDivElement>) => {
    const { top } = this.state;
    const thumbStyle = {
      backgroundColor: `rgb(${Math.round(255 - top * 255)}, ${Math.round(
        255 - top * 255,
      )}, ${Math.round(255 - top * 255)})`,
      borderRadius: 'inherit',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  render() {
    return (
      <Scrollbars
        renderView={this.renderView}
        renderThumbHorizontal={this.renderThumb}
        renderThumbVertical={this.renderThumb}
        onUpdate={this.handleUpdate}
        {...this.props}
      />
    );
  }
}
