---
title: Demo
---

# Demo of rc-scrollbars

## Default usage

```jsx
/**
 * title: Default vertical content
 * desc: Default usage of rc-scrollbars with vertical scroll
 */
import React from 'react';
import { Scrollbars } from 'rc-scrollbars';
import { Lorem } from './components/Lorem';

export default () => (
  <Scrollbars style={{ width: 300, height: 300 }}>
    <Lorem />
  </Scrollbars>
);
```

```jsx
/**
 * title: Default hozintal content
 * desc: Default usage of rc-scrollbars with horizontal and vertical scroll
 */
import React from 'react';
import { Scrollbars } from 'rc-scrollbars';
import { Lorem } from './components/Lorem';

export default () => (
  <Scrollbars style={{ width: 300, height: 300 }}>
    <div style={{ width: 500 }}>
      <Lorem />
    </div>
  </Scrollbars>
);
```

## Auto-hide

```jsx
import React from 'react';
import { Scrollbars } from 'rc-scrollbars';
import { Lorem } from './components/Lorem';

export default class App extends React.Component {
  render() {
    return (
      <Scrollbars style={{ height: 300 }} autoHide>
        <Lorem />
      </Scrollbars>
    );
  }
}
```

# Scrollbar customization

## Colored Scrollbar

```jsx
/**
 * title: Colored Scrollbar
 * desc: Example type customization of scrollbar and view
 */
import React from 'react';
import ColoredScrollbars from './components/ColoredScrollbars';
import { Lorem } from './components/Lorem';

export default () => (
  <ColoredScrollbars style={{ height: 300 }}>
    <Lorem />
  </ColoredScrollbars>
);
```

## View customization

```jsx
/**
 * title: Styled view
 */
import React from 'react';
import { Scrollbars } from 'rc-scrollbars';
import { Lorem } from './components/Lorem';
import ShadowScrollbars from './components/ShadowScrollbars/ShadowScrollbars'

export default class App extends React.Component {
  render() {
    return (
      <ShadowScrollbars style={{ height: 300 }} autoHide>
        <Lorem />
      </ShadowScrollbars>
    );
  }
}
```

## With SpringSystem by `rebound`

```jsx
/**
 * title: Spring Scrollbar
 */
import React from 'react';
import SpringScrollbarsExample from './components/SpringScrollbars/SpringScrollbarsExample'

export default class App extends React.Component {
  render() {
    return (
      <SpringScrollbarsExample />
    );
  }
}
```
