import React from 'react';

import Header from 'components/layout/DefaultLayout/components/Header';
import Main from 'components/layout/DefaultLayout/components/Main';
import Sidebar from 'components/layout/DefaultLayout/components/Sidebar';
import Footer from 'components/layout/DefaultLayout/components/Footer';

import 'components/layout/DefaultLayout/DefaultLayout.css';

const DefaultLayout = ({ topbar, page }) => (
  <div className="Layout">
    <Header>
      {topbar}
    </Header>
    <Main>
      {page}
    </Main>
    <Sidebar />
    <Footer />
  </div>
);

export default DefaultLayout;