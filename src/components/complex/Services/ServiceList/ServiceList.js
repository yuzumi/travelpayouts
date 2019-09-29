import React from 'react';
import ServiceCard from 'components/complex/Services/ServiceCard';

import 'components/complex/Services/ServiceList/ServiceList.css';

const ServiceList = ({ services }) => {
  const renderServiceListItem = (service) => (
    <li className="ServiceList-item" key={service.title}>
      <ServiceCard service={service} />
    </li>
  );

  return (
    <ul className="ServiceList">
      {services.map(renderServiceListItem)}
    </ul>
  );
};

export default ServiceList;