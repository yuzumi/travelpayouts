import React from 'react';

import 'components/layout/DefaultLayout/components/Main/Main.css';

const Main = ({ children }) => (
  <main className="Main">
    {children}
  </main>
);

export default Main;