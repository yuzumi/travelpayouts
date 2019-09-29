import React from 'react';

import 'components/shared/PriceTag/PriceTag.css';

const PriceTag = ({ name, price, currency }) => (
  <article className="PriceTag">
    <p className="PriceTag-name">{name}</p>
    <p className="PriceTag-cost">{price} {currency}</p>
  </article>
);

export default PriceTag;