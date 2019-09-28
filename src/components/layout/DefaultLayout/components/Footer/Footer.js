import React from 'react';

import 'components/layout/DefaultLayout/components/Footer/Footer.css';

const Footer = () => {
  const currentYear = () => new Date().getFullYear();

  return (
    <footer className="Footer">
      <div className="Footer-inner">
        <p className="Copyright">
          © Travelpayouts, 2011–{currentYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;