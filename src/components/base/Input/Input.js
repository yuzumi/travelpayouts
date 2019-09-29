import React, { forwardRef } from 'react';

import 'components/base/Input/Input.css';

const Input = forwardRef((props, ref) => (
  <input {...props} ref={ref} />
));

export default Input;