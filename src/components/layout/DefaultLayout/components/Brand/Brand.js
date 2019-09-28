import React from 'react';
import Logo from 'static/icons/logo.svg';

import 'components/layout/DefaultLayout/components/Brand/Brand.css';

const Brand = () => (
  <figure className="Brand">
    <img className="Brand-logo" src={Logo} alt="Logo" />
  </figure>
);

export default Brand;