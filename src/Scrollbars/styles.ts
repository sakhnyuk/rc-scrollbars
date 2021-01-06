import { CSSProperties } from 'react';

export const containerStyleDefault: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
};

// Overrides containerStyleDefault properties
export const containerStyleAutoHeight: CSSProperties = {
  height: 'auto',
};

export const viewStyleDefault: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'scroll',
  WebkitOverflowScrolling: 'touch',
};

// Overrides viewStyleDefault properties
export const viewStyleAutoHeight: CSSProperties = {
  position: 'relative',
  top: undefined,
  left: undefined,
  right: undefined,
  bottom: undefined,
};

export const viewStyleUniversalInitial: CSSProperties = {
  overflow: 'hidden',
  marginRight: 0,
  marginBottom: 0,
};

export const trackStyleDefault: CSSProperties = {
  position: 'absolute',
  height: 6,
  right: 2,
  bottom: 2,
  borderRadius: 3,
  zIndex: 100,
};

export const trackHorizontalStyleDefault: CSSProperties = {
  ...trackStyleDefault,
  left: 2,
};

export const trackVerticalStyleDefault: CSSProperties = {
  ...trackStyleDefault,
  top: 2,
};

export const thumbStyleDefault: CSSProperties = {
  position: 'relative',
  display: 'block',
  height: '100%',
  cursor: 'pointer',
  borderRadius: 'inherit',
  backgroundColor: 'rgba(0,0,0,.2)',
};

export const disableSelectStyle: CSSProperties = {
  userSelect: 'none',
};

export const disableSelectStyleReset: CSSProperties = {
  userSelect: 'auto',
};
