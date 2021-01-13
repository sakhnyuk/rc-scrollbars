---
title: API
order: 4
---

# API
## `<Scrollbars>`

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| autoHeight | Enable auto-height mode. When `true` container grows with content | `boolean` | `false` |
| autoHeightMax | Set a minimum height for auto-height mode. Ignoring if **autoHeight** is `false` | `Number` | 0 |
| autoHeightMin | Set a maximum height for auto-height mode. Ignoring if **autoHeight** is `false`| `Number` | 200 |
| autoHide | Enable auto-hide mode. When `true` tracks will hide automatically and are only visible while scrolling. | `boolean` | `false` |
| autoHideDuration | Duration for hide animation in ms. | `Number` | 200 |
| autoHideTimeout | Hide delay in ms. | `Number` | 1000 |
| hideTracksWhenNotNeeded | Hide tracks (`visibility: hidden`) when content does not overflow container. | `Boolean` | `false` |
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
| thumbMinSize | The element your content will be rendered in | `Number` | 30 |
| thumbSize | The element your content will be rendered in | `Number or undefined` | `undefined` |
| universal | Enable universal rendering (SSR). [Learn how to use universal rendering](/usage#universal-rendering) | `Boolean` | `false` |


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
