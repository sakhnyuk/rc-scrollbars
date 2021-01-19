import { CSSProperties } from 'react';
import { StyleKeys } from './types';

export function createStyles(disableDefaultStyles: boolean): Record<StyleKeys, CSSProperties> {
  const trackStyleDefault: CSSProperties = {
    position: 'absolute',
    right: 2,
    bottom: 2,
    zIndex: 100,
    ...(!disableDefaultStyles && { borderRadius: 3 }),
  };

  return {
    containerStyleDefault: {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
    },

    containerStyleAutoHeight: {
      height: 'auto',
    },

    viewStyleDefault: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'scroll',
      WebkitOverflowScrolling: 'touch',
    },

    // Overrides viewStyleDefault properties
    viewStyleAutoHeight: {
      position: 'relative',
      top: undefined,
      left: undefined,
      right: undefined,
      bottom: undefined,
    },

    viewStyleUniversalInitial: {
      overflow: 'hidden',
      marginRight: 0,
      marginBottom: 0,
    },

    trackHorizontalStyleDefault: {
      ...trackStyleDefault,
      left: 2,
      height: 6,
    },

    trackVerticalStyleDefault: {
      ...trackStyleDefault,
      top: 2,
      width: 6,
    },

    thumbStyleDefault: {
      position: 'relative',
      display: 'block',
      height: '100%',
      cursor: 'pointer',
      borderRadius: 'inherit',
      ...(!disableDefaultStyles && { backgroundColor: 'rgba(0,0,0,.2)' }),
    },

    disableSelectStyle: {
      userSelect: 'none',
    },

    disableSelectStyleReset: {
      userSelect: 'auto',
    },
  };
}
