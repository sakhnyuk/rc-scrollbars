rc-scrollbars
=========================
rejuvenated project of [react-custom-scrollbars](https://github.com/malte-wessel/react-custom-scrollbars)

[comment]: <> ([![npm]&#40;https://img.shields.io/badge/npm-react--custom--scrollbars-brightgreen.svg?style=flat-square&#41;]&#40;&#41;)

[comment]: <> ([![npm version]&#40;https://img.shields.io/npm/v/react-custom-scrollbars.svg?style=flat-square&#41;]&#40;https://www.npmjs.com/package/react-custom-scrollbars&#41;)

[comment]: <> ([![npm downloads]&#40;https://img.shields.io/npm/dm/react-custom-scrollbars.svg?style=flat-square&#41;]&#40;https://www.npmjs.com/package/react-custom-scrollbars&#41;)

* frictionless native browser scrolling
* native scrollbars for mobile devices
* [fully customizable](https://github.com/sakhnyuk/rc-scrollbars/blob/master/docs/customization.md)
* [auto hide](https://github.com/sakhnyuk/rc-scrollbars/blob/master/docs/usage.md#auto-hide)
* [auto height](https://github.com/sakhnyuk/rc-scrollbars/blob/master/docs/usage.md#auto-height)
* [universal](https://github.com/sakhnyuk/rc-scrollbars/blob/master/docs/usage.md#universal-rendering) (runs on client & server)
* `requestAnimationFrame` for 60fps
* no extra stylesheets
* well tested, 100% code coverage

**[Demos](http://malte-wessel.github.io/react-custom-scrollbars/) · [Documentation](https://github.com/sakhnyuk/rc-scrollbars/tree/master/docs)**

## Installation
```bash
npm install rc-scrollbars --save
```

This assumes that you’re using [npm](http://npmjs.com/) package manager with a module bundler like [Webpack](http://webpack.github.io) or [Browserify](http://browserify.org/) to consume [CommonJS modules](http://webpack.github.io/docs/commonjs.html).

## Usage

This is the minimal configuration. [Check out the Documentation for advanced usage](https://github.com/sakhnyuk/rc-scrollbars/tree/master/docs).

```jsx
import { Scrollbars } from 'react-custom-scrollbars';

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

```jsx
import { Scrollbars } from 'react-custom-scrollbars';

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
npm install
# Move to example directory
cd react-custom-scrollbars/examples/simple
npm install
npm start
```

## Tests
```bash
# Make sure that you've installed the dependencies
npm install
# Run tests
npm test
```

### Code Coverage
```bash
# Run code coverage. Results can be found in `./coverage`
npm run test:cov
```


## License

MIT
