import { ScrollbarsProps, StyleClasses } from '..';
import classNames from 'classNames';

function getDynamicClasses(props: ScrollbarsProps): Partial<StyleClasses> {
  return {
    root: classNames({
      'rc-scrollbars-heightAuto': props.autoHeight,
    }),
  };
}

export default function getFinalClasses(props: ScrollbarsProps): StyleClasses {
  const { className, classes } = props;
  const dynamicClasses = getDynamicClasses(props);

  return {
    root: classNames('rc-scrollbars-container', className, dynamicClasses.root, classes.root),
    view: classNames('rc-scrollbars-view', dynamicClasses.view, classes.view),
    trackVertical: classNames(
      'rc-scrollbars-track',
      dynamicClasses.trackVertical,
      classes.trackVertical,
    ),
    trackHorizontal: classNames(
      'rc-scrollbars-track',
      dynamicClasses.trackHorizontal,
      classes.trackHorizontal,
    ),
    thumbVertical: classNames(
      'rc-scrollbars-thumb',
      dynamicClasses.thumbVertical,
      classes.thumbVertical,
    ),
    thumbHorizontal: classNames(
      'rc-scrollbars-thumb',
      dynamicClasses.thumbHorizontal,
      classes.thumbHorizontal,
    ),
  };
}
