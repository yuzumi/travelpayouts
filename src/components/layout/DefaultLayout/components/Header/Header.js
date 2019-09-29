import React from 'react';

import 'components/layout/DefaultLayout/components/Header/Header.css';

const Header = ({ children }) => (
  <header className="Header">
    {children}
  </header>
);

export default Header;