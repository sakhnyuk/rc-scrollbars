export default function getInnerHeight(el?: HTMLElement) {
  if (!el) return 0;
  const { clientHeight } = el;
  const { paddingTop, paddingBottom } = getComputedStyle(el);
  return clientHeight - parseFloat(paddingTop) - parseFloat(paddingBottom);
}
