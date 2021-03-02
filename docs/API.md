---
title: API
order: 4
---

# API
## `<Scrollbars>`

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| autoHeight | Enable auto-height mode. When `true` container grows with content | `boolean` | `false` |
| autoHeightMax | Set a minimum height for auto-height mode. Ignoring if **autoHeight** is `false` | `number` | 0 |
| autoHeightMin | Set a maximum height for auto-height mode. Ignoring if **autoHeight** is `false`| `number` | 200 |
| autoHide | Enable auto-hide mode. When `true` tracks will hide automatically and are only visible while scrolling. | `boolean` | `false` |
| autoHideDuration | Duration for hide animation in ms. | `number` | 200 |
| autoHideTimeout | Hide delay in ms. | `number` | 1000 |
| classes | extra custom className/s to any of the subcomponents | <code>Partial<Record<'root' &#124; 'view' &#124; 'trackVertical' &#124; 'trackHorizontal' &#124; 'thumbVertical' &#124; 'thumbHorizontal', string></code> | `{}`
| className | className for the root component | `string` | `undefined`
| disableDefaultStyles | removes basic styling to ease visual customization | `boolean` | `false` 
| hideTracksWhenNotNeeded | Hide tracks (`visibility: hidden`) when content does not overflow container. | `boolean` | `false` |
| id | The `id` to apply to the root element | `string` | `undefined` |
| onScroll | Event handler | `(e: React.UIEvent<HTMLElement>) => void` | `undefined` |
| onScrollFrame | Runs inside the animation frame. Type of `ScrollValues` you can check below | `(values: ScrollValues) => void` | `undefined` |
| onScrollStart | Called when scrolling starts | `() => void` | `undefined` |
| onScrollStop | Called when scrolling stops | `() => void` | `undefined` |
| onUpdate | Called when ever the component is updated. Runs inside the animation frame | `(values: ScrollValues) => void` | `undefined` |
| renderThumbHorizontal | Horizontal thumb element | `(props: HTMLAttributes<HTMLDivElement>) => JSX.Element` | `undefined` |
| renderThumbVertical | Vertical thumb element | `(props: HTMLAttributes<HTMLDivElement>) => JSX.Element` | `undefined` |
| renderTrackHorizontal | Horizontal track element | `(props: HTMLAttributes<HTMLDivElement>) => JSX.Element` | `undefined` |
| renderTrackVertical | Vertical track element | `(props: HTMLAttributes<HTMLDivElement>) => JSX.Element` | `undefined` |
| renderView | The element your content will be rendered in | `(props: HTMLAttributes<HTMLDivElement>) => JSX.Element` | `undefined` |
| thumbMinSize | The element your content will be rendered in | `number` | 30 |
| thumbSize | The element your content will be rendered in | `number or undefined` | `undefined` |
| universal | Enable universal rendering (SSR). [Learn how to use universal rendering](/usage#universal-rendering) | `boolean` | `false` |

### ScrollValues
```typescript
export interface ScrollValues {
  left: number;          // scrollLeft progess, from 0 to 1
  top: number;           // scrollTop progess, from 0 to 1
  scrollLeft: number;    // Native scrollLeft
  scrollTop: number;     // Native scrollTop
  scrollWidth: number;   // Width of the view
  scrollHeight: number;  // Native scrollHeight
  clientWidth: number;   // Width of the view
  clientHeight: number;  // Height of the view
}
```

### Methods

- `scrollTop(top = 0)`: scroll to the top value
- `scrollLeft(left = 0)`: scroll to the left value
- `scrollToTop()`: scroll to top
- `scrollToBottom()`: scroll to bottom
- `scrollToLeft()`: scroll to left
- `scrollToRight()`: scroll to right
- `getScrollLeft()`: get scrollLeft value
- `getScrollTop()`: get scrollTop value
- `getScrollWidth()`: get scrollWidth value
- `getScrollHeight()`: get scrollHeight value
- `getClientWidth()`: get view client width
- `getClientHeight()`: get view client height
- `getValues()`: get an object with values about the current position.
