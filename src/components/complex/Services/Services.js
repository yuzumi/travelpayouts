import React, { useState } from 'react';
import ServiceList from 'components/complex/Services/ServiceList';
import Filter from 'components/complex/Services/Filter';

import 'components/complex/Services/Services.css';

const Services = ({ services }) => {
  const [search, setSearch] = useState('');

  const onChange = event => {
    setSearch(event.target.value);
  };

  const onReset = () => {
    setSearch('');
  };

  const filterServices = (key, value) => services => {
    return services.filter(service => {
      return service[key].toLowerCase().includes(value.toLowerCase());
    });
  };

  const filterServicesByTitle = filterServices('title', search);

  return (
    <section className="Services">
      <header className="Services-header">
        <h2 className="Services-title">Services</h2>
      </header>
      <main className="Services-main">
        <Filter value={search} {...{ onChange, onReset }} />
        <ServiceList services={filterServicesByTitle(services)} />
      </main>
    </section>
  );
};

export default Services;