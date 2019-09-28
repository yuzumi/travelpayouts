import React, { useState } from 'react';
import Input from 'components/base/Input';
import Copy from 'static/icons/copy.svg';

import 'components/shared/CopyToClipboard/CopyToClipboard.css';

const CopyToClipboard = ({ value }) => {
  const defaultTooltipText = 'Copy to clipboard';

  const [tooltipText, setTooltipText] = useState(defaultTooltipText);

  const copyToClipboard = () => {
    const field = document.getElementById('CopyToClipboard-field');

    field.select();
    field.setSelectionRange(0, 99999);

    document.execCommand('copy');

    const tooltipText = `Copied: ${field.value}`;

    setTooltipText(tooltipText);
  };

  const resetToDefault = () => {
    setTooltipText(defaultTooltipText);
  };

  return (
    <div className="CopyToClipboard">
      <Input
        className="CopyToClipboard-field Input"
        id="CopyToClipboard-field"
        value={value}
        readOnly
      />
      <div className="CopyToClipboard-tooltip">
        <span className="CopyToClipboard-tooltipText">
          {tooltipText}
        </span>
        <img
          className="CopyToClipboard-icon"
          src={Copy}
          alt=""
          onClick={copyToClipboard}
          onMouseLeave={resetToDefault}
        />
      </div>
    </div>
  );
};

export default CopyToClipboard;