import random from 'lodash/random';
import { Component } from 'react';
import SpringScrollbars from './SpringScrollbars';
import { Lorem } from '../Lorem';

export default class SpringScrollbarsExample extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.handleClickRandomPosition = this.handleClickRandomPosition.bind(this);
  }

  handleClickRandomPosition() {
    const { scrollbars } = this.refs;
    const scrollHeight = scrollbars.getScrollHeight();
    scrollbars.scrollTop(random(scrollHeight));
  }

  render() {
    return (
      <div className="separated">
        <SpringScrollbars ref="scrollbars" style={{ height: 300 }}>
          <Lorem />
        </SpringScrollbars>

        <button onClick={this.handleClickRandomPosition} style={{ marginTop: 40 }}>
          <i className="fa fa-random" /> Random position
        </button>

        <div className="text-xs text-gray-800 mt-4">
          <p>
            The Scrollbars are animated with{' '}
            <a
              href="https://github.com/facebook/rebound-js"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-black text-sm"
            >
              Rebound
            </a>
            . You can simply animate the Scrollbars with <code>scrollbars.scrollTop(x)</code>.
          </p>
          <p>
            Don't forget to wrap your steps with <code>requestAnimationFrame</code>.
          </p>
        </div>
      </div>
    );
  }
}
