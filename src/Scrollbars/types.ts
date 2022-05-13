import { CSSProperties, HTMLAttributes } from 'react';
import * as React from 'react';

export interface ScrollbarsProps {
  children?: React.ReactNode;
  autoHeight: boolean;
  autoHeightMax: number | string;
  autoHeightMin: number | string;
  autoHide: boolean;
  autoHideDuration: number;
  autoHideTimeout: number;
  /* class applied to the root element */
  className?: string;
  classes?: Partial<StyleClasses>;
  disableDefaultStyles: boolean;
  hideTracksWhenNotNeeded?: boolean;
  id?: string;
  onScroll?: (e: React.UIEvent<HTMLElement>) => void;
  onScrollFrame?: (values: ScrollValues) => void;
  onScrollStart?: () => void;
  onScrollStop?: () => void;
  onUpdate?: (values: ScrollValues) => void;
  renderThumbHorizontal: CustomRenderer;
  renderThumbVertical: CustomRenderer;
  renderTrackHorizontal: CustomRenderer;
  renderTrackVertical: CustomRenderer;
  renderView: CustomRenderer;
  style?: React.CSSProperties;
  tagName: string;
  thumbMinSize: number;
  thumbSize?: number;
  universal: boolean;
}

export interface ScrollValues {
  left: number;
  top: number;
  scrollLeft: number;
  scrollTop: number;
  scrollWidth: number;
  scrollHeight: number;
  clientWidth: number;
  clientHeight: number;
}

export interface StyleClasses {
  root: string;
  view: string;
  trackHorizontal: string;
  thumbHorizontal: string;
  trackVertical: string;
  thumbVertical: string;
}

export type StyleKeys =
  | 'containerStyleDefault'
  | 'containerStyleAutoHeight'
  | 'viewStyleDefault'
  | 'viewStyleAutoHeight'
  | 'viewStyleUniversalInitial'
  | 'trackHorizontalStyleDefault'
  | 'trackVerticalStyleDefault'
  | 'thumbStyleDefault'
  | 'disableSelectStyle'
  | 'disableSelectStyleReset';

export interface CustomRenderProps extends HTMLAttributes<HTMLDivElement> {
  style: CSSProperties;
  className: string;
}

export interface CustomRenderer {
  (props: CustomRenderProps): JSX.Element;
}
