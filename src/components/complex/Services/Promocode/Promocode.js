import React from 'react';
import CopyToClipboard from 'components/shared/CopyToClipboard';

import 'components/complex/Services/Promocode/Promocode.css';

const Promocode = ({ promocode }) => (
  <article className="Promocode">
    <h5 className="Promocode-title">Promocode</h5>
    <CopyToClipboard value={promocode} />
  </article>
);

export default Promocode;