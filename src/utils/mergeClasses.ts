import { ScrollbarsProps, StyleClasses } from '..';

const defaultClasses: StyleClasses = {
  root: 'rc-scrollbars-container',
  view: 'rc-scrollbars-view',
  trackVertical: 'rc-scrollbars-track rc-scrollbars-track-v',
  trackHorizontal: 'rc-scrollbars-track rc-scrollbars-track-h',
  thumbVertical: 'rc-scrollbars-thumb rc-scrollbars-thumb-v',
  thumbHorizontal: 'rc-scrollbars-thumb rc-scrollbars-thumb-h',
};

function mergeClasses(defaultClasses, providedClasses) {
  return providedClasses
    ? Object.keys(defaultClasses).reduce((result, classKey) => {
        result[classKey] = `${defaultClasses[classKey]} ${providedClasses[classKey] || ''}`;
        return result;
      }, {})
    : defaultClasses;
}

export default function getFinalClasses(props: ScrollbarsProps): StyleClasses {
  const { className, classes } = props;
  const { root: defaultRootClass, ...rest } = defaultClasses;

  return {
    root: [defaultRootClass, className, classes?.root].filter(Boolean).join(' '),
    ...mergeClasses(rest, props.classes),
  };
}
