export const mergeSx = (styles: any) => {
  return Array.isArray(styles) ? Object.assign({}, ...styles) : styles;
};
