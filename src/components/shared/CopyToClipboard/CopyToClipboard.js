import React, { useState, useRef } from 'react';
import Copy from 'static/icons/copy.svg';

import 'components/shared/CopyToClipboard/CopyToClipboard.css';

const CopyToClipboard = ({ value }) => {
  const defaultTooltipText = 'Copy to clipboard';

  const [tooltipText, setTooltipText] = useState(defaultTooltipText);

  const fieldRef = useRef(null);

  const copyToClipboard = () => {
    fieldRef.current.select();
    fieldRef.current.setSelectionRange(0, 99999);

    document.execCommand('copy');

    const tooltipText = `Copied: ${fieldRef.current.value}`;

    setTooltipText(tooltipText);
  };

  const resetToDefault = () => {
    setTooltipText(defaultTooltipText);
  };

  return (
    <div className="CopyToClipboard">
      <input
        className="CopyToClipboard-field"
        id="CopyToClipboard-field"
        value={value}
        ref={fieldRef}
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