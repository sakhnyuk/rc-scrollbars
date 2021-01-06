import { CSSProperties, HTMLAttributes } from 'react';

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

export interface CustomRenderProps extends HTMLAttributes<HTMLDivElement> {
  style: CSSProperties;
  className: string;
}

export interface CustomRenderer {
  (props: CustomRenderProps): JSX.Element;
}
