---
title: Demo
order: 5
---

# Demo of rc-scrollbars

## Default usage

```jsx
/**
 * title: Default vertical content
 * desc: Default usage of rc-scrollbars with vertical scroll
 * hideActions: ['CSB']
 */
import React from 'react';
import { Scrollbars } from 'rc-scrollbars';
import { Lorem } from './components/Lorem';

export default () => (
  <Scrollbars style={{ maxWidth: 600, height: 300 }}>
    <Lorem />
  </Scrollbars>
);
```

```jsx
/**
 * title: Default hozintal content
 * desc: Default usage of rc-scrollbars with horizontal and vertical scroll
 * hideActions: ['CSB']
 */
import React from 'react';
import { Scrollbars } from 'rc-scrollbars';
import { Lorem } from './components/Lorem';

export default () => (
  <Scrollbars style={{ maxWidth: 600, height: 300 }}>
    <div style={{ width: 800 }}>
      <Lorem />
    </div>
  </Scrollbars>
);
```

## Auto-hide

```jsx
/**
 * hideActions: ['CSB']
 */
import React from 'react';
import { Scrollbars } from 'rc-scrollbars';
import { Lorem } from './components/Lorem';

export default class App extends React.Component {
  render() {
    return (
      <Scrollbars style={{ maxWidth: 600, height: 300 }} autoHide>
        <Lorem />
      </Scrollbars>
    );
  }
}
```

# Scrollbar customization

## Colored Scrollbar view

```jsx
/**
 * title: Colored Scrollbar
 * desc: Example type customization of scrollbar and view
 * hideActions: ['CSB']
 */
import React from 'react';
import ColoredScrollbars from './components/ColoredScrollbars';
import { Lorem } from './components/Lorem';

export default () => (
  <ColoredScrollbars style={{ maxWidth: 600, height: 300 }}>
    <Lorem />
  </ColoredScrollbars>
);
```

## Scrollbar View with shadow

```jsx
/**
 * title: Shadow view
 * hideActions: ['CSB']
 */
import React from 'react';
import { Scrollbars } from 'rc-scrollbars';
import { Lorem } from './components/Lorem';
import ShadowScrollbars from './components/ShadowScrollbars/ShadowScrollbars';

export default class App extends React.Component {
  render() {
    return (
      <ShadowScrollbars style={{ maxWidth: 600, height: 300 }} autoHide>
        <Lorem />
      </ShadowScrollbars>
    );
  }
}
```

## Custom scrollbar

```tsx
/**
 * title: Styled scrollbar
 * hideActions: ['CSB']
 */
import React from 'react';
import { Scrollbars } from 'rc-scrollbars';
import { Lorem } from './components/Lorem';

export default class App extends React.Component {
  thumbVertical({ style, ...props }: HTMLAttributes<HTMLDivElement>) {
    const finalStyle = {
      ...style,
      cursor: 'pointer',
      backgroundColor: 'rgba(0,255,0,.6)',
    };

    return <div style={finalStyle} {...props} />;
  }

  thumbHorizontal({ style, ...props }: HTMLAttributes<HTMLDivElement>) {
    const finalStyle = {
      ...style,
      cursor: 'pointer',
      backgroundColor: 'rgba(255,0,0,.6)',
    };

    return <div style={finalStyle} {...props} />;
  }

  render() {
    return (
      <Scrollbars
        style={{ maxWidth: 600, height: 300 }}
        renderThumbVertical={this.thumbVertical}
        renderThumbHorizontal={this.thumbHorizontal}
      >
        <div style={{ width: 800 }}>
          <Lorem />
        </div>
      </Scrollbars>
    );
  }
}
```

## With SpringSystem by `rebound`

```jsx
/**
 * title: Spring Scrollbar
 * hideActions: ['CSB']
 */
import React from 'react';
import SpringScrollbarsExample from './components/SpringScrollbars/SpringScrollbarsExample';

export default class App extends React.Component {
  render() {
    return <SpringScrollbarsExample />;
  }
}
```
