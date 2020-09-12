import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import PropTypes from 'prop-types';

import baseTheme from './theme';

export default ThemeProvider = ({ children }) => {
  return <Provider theme={baseTheme}>{children}</Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
