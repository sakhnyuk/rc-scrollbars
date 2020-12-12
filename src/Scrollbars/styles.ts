import * as React from 'react';

export const containerStyleDefault: React.CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
};

// Overrides containerStyleDefault properties
export const containerStyleAutoHeight: React.CSSProperties = {
  height: 'auto',
};

export const viewStyleDefault: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'scroll',
  WebkitOverflowScrolling: 'touch',
};

// Overrides viewStyleDefault properties
export const viewStyleAutoHeight: React.CSSProperties = {
  position: 'relative',
  top: undefined,
  left: undefined,
  right: undefined,
  bottom: undefined,
};

export const viewStyleUniversalInitial: React.CSSProperties = {
  overflow: 'hidden',
  marginRight: 0,
  marginBottom: 0,
};

export const trackHorizontalStyleDefault: React.CSSProperties = {
  position: 'absolute',
  height: 6,
};

export const trackVerticalStyleDefault: React.CSSProperties = {
  position: 'absolute',
  width: 6,
};

export const thumbHorizontalStyleDefault: React.CSSProperties = {
  position: 'relative',
  display: 'block',
  height: '100%',
};

export const thumbVerticalStyleDefault: React.CSSProperties = {
  position: 'relative',
  display: 'block',
  width: '100%',
};

export const disableSelectStyle: React.CSSProperties = {
  userSelect: 'none',
};

export const disableSelectStyleReset: React.CSSProperties = {
  userSelect: 'auto',
};
