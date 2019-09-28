import React from 'react';

import 'components/base/Button/Button.css';

const Button = ({ children, ...restProps }) => (
  <button {...restProps}>
    {children}
  </button>
);

export default Button;