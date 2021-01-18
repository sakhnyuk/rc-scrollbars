import { ScrollbarsProps, StyleClasses } from '..';
import cn from 'classnames';

function getDynamicClasses(props: ScrollbarsProps): Partial<StyleClasses> {
  return {
    root: cn({
      'rc-scrollbars-heightAuto': props.autoHeight,
    }),
  };
}

export default function getFinalClasses(props: ScrollbarsProps): StyleClasses {
  const { className, classes } = props;
  const dynamicClasses = getDynamicClasses(props);

  return {
    root: cn('rc-scrollbars-container', className, dynamicClasses.root, classes.root),
    view: cn('rc-scrollbars-view', dynamicClasses.view, classes.view),
    trackVertical: cn('rc-scrollbars-track', dynamicClasses.trackVertical, classes.trackVertical),
    trackHorizontal: cn(
      'rc-scrollbars-track',
      dynamicClasses.trackHorizontal,
      classes.trackHorizontal,
    ),
    thumbVertical: cn('rc-scrollbars-thumb', dynamicClasses.thumbVertical, classes.thumbVertical),
    thumbHorizontal: cn(
      'rc-scrollbars-thumb',
      dynamicClasses.thumbHorizontal,
      classes.thumbHorizontal,
    ),
  };
}
