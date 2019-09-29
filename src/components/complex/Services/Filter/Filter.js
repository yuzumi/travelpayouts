import React from 'react';
import Button from 'components/base/Button';
import Input from 'components/base/Input';

import 'components/complex/Services/Filter/Filter.css';

const Filter = ({ value, onChange, onReset }) => (
  <form className="Filter">
    <h5 className="Filter-title">Filter</h5>
    <div className="Filter-group">
      <Input
        className="Filter-field Input Input--primary Input--large"
        type="search"
        name="search"
        {...{ value, onChange }}
      />
      <Button
        className="Button Button--secondary Button--large"
        onClick={onReset}
        type="reset"
      >
        Reset
      </Button>
    </div>
  </form>
);

export default Filter;