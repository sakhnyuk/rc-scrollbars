import css from 'dom-css';

let scrollbarWidth: number | undefined = undefined;
let pxRatio: number = window.screen.availWidth / document.documentElement.clientWidth;

export default function getScrollbarWidth() {
  /**
   * Check zoom ratio. If it was changed, then it would update scrollbatWidth
   */
  const newPxRatio = window.screen.availWidth / document.documentElement.clientWidth;
  if (pxRatio !== newPxRatio) {
    scrollbarWidth = getScrollbarWidthFromDom();
  }

  if (typeof scrollbarWidth === 'number') return scrollbarWidth;

  /* istanbul ignore else */
  if (typeof document !== 'undefined') {
    scrollbarWidth = getScrollbarWidthFromDom();
  } else {
    scrollbarWidth = 0;
  }

  return scrollbarWidth || 0;
}

function getScrollbarWidthFromDom() {
  const div = document.createElement('div');

  css(div, {
    width: 100,
    height: 100,
    position: 'absolute',
    top: -9999,
    overflow: 'scroll',
    MsOverflowStyle: 'scrollbar',
  });

  document.body.appendChild(div);
  const result = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);

  return result;
}
