import React from 'react';
import Promocode from 'components/complex/Services/Promocode';
import Button from 'components/base/Button';

import 'components/complex/Services/ServiceCard/ServiceCard.css';

const ServiceCard = ({ service }) => {

  return (
    <article className="ServiceCard">
      <div className="ServiceCard-info">
        <h4 className="ServiceCard-name">{service.title}</h4>
        <p className="ServiceCard-description">{service.description || 'Description'}</p>
      </div>
      <div className="ServiceCard-actions">
        <Promocode promocode={service.promocode} />
        <Button className="Button Button--primary Button--large Button--block">
          Get a bonus
        </Button>
      </div>
    </article>
  );
};

export default ServiceCard;