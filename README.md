rc-scrollbars
=========================
rejuvenated project of <a href="https://github.com/malte-wessel/react-custom-scrollbars" target="_blank">react-custom-scrollbars</a>

[![npm](https://img.shields.io/badge/npm-rc--scrollbars-brightgreen.svg?style=flat-square)](https://www.npmjs.com/package/rc-scrollbars)
[![npm version](https://img.shields.io/npm/v/rc-scrollbars.svg?style=flat-square)](https://www.npmjs.com/package/rc-scrollbars)

* frictionless native browser scrolling
* native scrollbars for mobile devices
* [fully customizable](https://github.com/sakhnyuk/rc-scrollbars/blob/master/docs/customization.md)
* [auto hide](https://github.com/sakhnyuk/rc-scrollbars/blob/master/docs/usage.md#auto-hide)
* [auto height](https://github.com/sakhnyuk/rc-scrollbars/blob/master/docs/usage.md#auto-height)
* [universal](https://github.com/sakhnyuk/rc-scrollbars/blob/master/docs/usage.md#universal-rendering) (runs on client & server)
* `requestAnimationFrame` for 60fps
* no extra stylesheets
* well tested, 100% code coverage

**[Demos](https://rc-scrollbars.vercel.app/) · [Documentation](https://github.com/sakhnyuk/rc-scrollbars/tree/master/docs)**

## Installation
```bash
npm install rc-scrollbars --save

# OR

yarn add rc-scrollbars
```

This assumes that you’re using [npm](http://npmjs.com/) package manager with a module bundler like [Webpack](http://webpack.github.io) or [Browserify](http://browserify.org/) to consume [CommonJS modules](http://webpack.github.io/docs/commonjs.html).

## Usage

This is the minimal configuration. [Check out the Documentation for advanced usage](https://github.com/sakhnyuk/rc-scrollbars/tree/master/docs).

```javascript
import { Scrollbars } from 'rc-scrollbars';

class App extends Component {
  render() {
    return (
      <Scrollbars style={{ width: 500, height: 300 }}>
        <p>Some great content...</p>
      </Scrollbars>
    );
  }
}
```

The `<Scrollbars>` component is completely customizable. Check out the following code:

```javascript
import { Scrollbars } from 'rc-scrollbars';

class CustomScrollbars extends Component {
  render() {
    return (
      <Scrollbars
        onScroll={this.handleScroll}
        onScrollFrame={this.handleScrollFrame}
        onScrollStart={this.handleScrollStart}
        onScrollStop={this.handleScrollStop}
        onUpdate={this.handleUpdate}
        renderView={this.renderView}
        renderTrackHorizontal={this.renderTrackHorizontal}
        renderTrackVertical={this.renderTrackVertical}
        renderThumbHorizontal={this.renderThumbHorizontal}
        renderThumbVertical={this.renderThumbVertical}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax={200}
        thumbMinSize={30}
        universal={true}
        {...this.props} />
    );
  }
}
```

All properties are documented in the [API docs](https://github.com/sakhnyuk/rc-scrollbars/blob/master/docs/API.md)

## Examples

Run the simple example:
```bash
# Make sure that you've installed the dependencies
yarn install
# Move to example directory
cd example/
yarn install
yarn start
```

## Tests (WIP)
```bash
# Make sure that you've installed the dependencies
yarn install
# Run tests
yarn test
```

### Code Coverage (WIP)
```bash
# Run code coverage. Results can be found in `./coverage`
yarn test:cov
```


## License

MIT
