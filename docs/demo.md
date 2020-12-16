---
title: Demo
---

# Demo of rc-scrollbars

## Colored Scrollbar

```jsx
/**
 * title: Colored Scrollbar
 * desc: Example of type to customization of scrollbar and view
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
