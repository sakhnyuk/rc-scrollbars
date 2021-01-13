---
title: Getting started
order: 1
---

# rc-scrollbars

React scrollbars component.

`rc-scrollbars` is rejuvenated project of <a href="https://github.com/malte-wessel/react-custom-scrollbars" target="_blank">react-custom-scrollbars</a>

[![npm](https://img.shields.io/badge/npm-rc--scrollbars-brightgreen.svg?style=flat-square)](https://www.npmjs.com/package/rc-scrollbars)
[![npm version](https://img.shields.io/npm/v/rc-scrollbars.svg?style=flat-square)](https://www.npmjs.com/package/rc-scrollbars)
[![npm downloads](https://img.shields.io/npm/dm/rc-scrollbars.svg?style=flat-square)](https://www.npmjs.com/package/rc-scrollbars)

* frictionless native browser scrolling
* native scrollbars for mobile devices
* [fully customizable](/customization)
* [auto hide](/usage#auto-hide)
* [auto height](/usage#auto-height)
* [universal](/usage#universal-rendering) (runs on client & server)
* `requestAnimationFrame` for 60fps
* no extra stylesheets
* well tested, 100% code coverage

#### **[Demos](/demo) · [API](/api)  ·  [GitHub](https://github.com/sakhnyuk/rc-scrollbars)**

## Installation
```bash
npm install rc-scrollbars --save

# OR

yarn add rc-scrollbars
```

This assumes that you’re using [npm](http://npmjs.com/) package manager with a module bundler like [Webpack](http://webpack.github.io) or [Browserify](http://browserify.org/) to consume [CommonJS modules](http://webpack.github.io/docs/commonjs.html).

## MacOS scrollbars explained

![scrollbar-macos](/scrollbar-macos.png)

MacOS have 2 options of scrollbars visibility:
- **Automatically based on mouse and trackpad** and **When scrolling** - Scrollbar thumb visible only while scrolling. Browsers don't add scrollbar blocks and only scrollbar thumbs placed over scroll block. **rc-scrollbars v1 don't render scroll tracks and thumbs** 
- **Always** - Show scrollbar always. In that option, browsers add system scrollbars like on Windows and Linux. **rc-scrollbars** working as expected.

## Usage

This is the minimal configuration. [Check out the **Usage** page for advanced examples](/usage).

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

All properties are documented in the [API docs](/api)

## Run project locally

```bash
# Make sure that you've installed the dependencies
yarn
# Run tsc of Scrollbars in watch mode and the documentation project in dev env
yarn dev
```

## License

MIT
