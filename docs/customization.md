---
title: Customization
order: 3
---

# Customization

The `<Scrollbars>` component consists of the following elements:

- `root` The root element that covering scrolled view with track and thumb placed
- `view` The element your content is rendered in
- `trackHorizontal` The horizontal scrollbars track
- `trackVertical` The vertical scrollbars track
- `thumbHorizontal` The horizontal thumb
- `thumbVertical` The vertical thumb

![scrollbar-components](/scrollbar-components.png)

## `rc-scrollbars` provide three ways to get your components styled

## Render props

Each element can be **rendered individually** with a function that you pass to the component.

Say, you want use your own `className` for each element:

```typescript jsx
import { Scrollbars } from 'rc-scrollbars';
import './styles.css';

class CustomScrollbars extends Component {
  render() {
    return (
      <Scrollbars
        renderTrackHorizontal={(props) => <div {...props} className="track-horizontal" />}
        renderTrackVertical={(props) => <div {...props} className="track-vertical" />}
        renderThumbHorizontal={(props) => <div {...props} className="thumb-horizontal" />}
        renderThumbVertical={(props) => <div {...props} className="thumb-vertical" />}
        renderView={(props) => <div {...props} className="view" />}
      >
        {this.props.children}
      </Scrollbars>
    );
  }
}

class App extends Component {
  render() {
    return (
      <CustomScrollbars style={{ width: 500, height: 300 }}>
        <p>Some great content...</p>
      </CustomScrollbars>
    );
  }
}
```

**Important**: **You will always need to pass through the given props** for the respective element like in the example above: `<div {...props} className="track-horizontal"/>`. This is because we need to pass some default `styles` down to the element in order to make the component work.

If you are working with **inline styles**, you could do something like this:

```jsx | pure
import { Scrollbars } from 'rc-scrollbars';

const myOwnStyles = { backgroundColor: 'blue' };

class CustomScrollbars extends Component {
  render() {
    return (
      <Scrollbars
        renderTrackHorizontal={({ style, ...props }) => (
          <div {...props} style={{ ...style, ...myOwnStyles }} />
        )}
      >
        {this.props.children}
      </Scrollbars>
    );
  }
}
```

## Default classNames

For convenience, some 'marker' classes are provided for each of the subcomponents:

`root`: 'rc-scrollbars-container'  
 `view`: 'rc-scrollbars-view'  
 `trackVertical`: 'rc-scrollbars-track rc-scrollbars-track-v'  
 `trackHorizontal`: 'rc-scrollbars-track rc-scrollbars-track-h'  
 `thumbVertical`: 'rc-scrollbars-thumb rc-scrollbars-thumb-v'  
 `thumbHorizontal`: 'rc-scrollbars-thumb rc-scrollbars-thumb-h'

There's very little 'beautifying' styles applied by default, however if you'd like to change the `background-color` of the **thumbs** or `border-radius` of the **tracks** you can easily disable their default styling by passing a single prop `disableDefaultStyles`.

## Classes prop

You can pass `classes` prop and set your own className for every provided element

```jsx | pure
import { Scrollbars } from 'rc-scrollbars';
import css from './styles.module.css';

const StyledScrollbars = ({ children }) => {
  return (
    <Scrollbars
      classes={{
        root: css.root,
        view: css.view,
        trackHorizontal: css.trackHorizontal,
        thumbHorizontal: css.thumbHorizontal,
        trackVertical: css.trackVertical,
        thumbVertical: css.thumbVertical,
      }}
    >
      {children}
    </Scrollbars>
  );
};
```

# Respond to scroll events

If you want to change the appearance in respond to the scrolling position, you could do that like:

```javascript
import { Scrollbars } from 'rc-scrollbars';
class CustomScrollbars extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { top: 0 };
    this.handleScrollFrame = this.handleScrollFrame.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  handleScrollFrame(values) {
    const { top } = values;
    this.setState({ top });
  }

  renderView({ style, ...props }) {
    const { top } = this.state;
    const color = top * 255;
    const customStyle = {
      backgroundColor: `rgb(${color}, ${color}, ${color})`,
    };
    return <div {...props} style={{ ...style, ...customStyle }} />;
  }

  render() {
    return (
      <Scrollbars
        renderView={this.renderView}
        onScrollFrame={this.handleScrollFrame}
        {...this.props}
      />
    );
  }
}
```

### Check out [**DEMO**](/demo) for some inspiration
