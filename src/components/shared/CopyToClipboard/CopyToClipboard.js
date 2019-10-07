import React, { useState, useRef } from 'react';
import Copy from 'static/icons/copy.svg';

import 'components/shared/CopyToClipboard/CopyToClipboard.css';

const CopyToClipboard = ({ value }) => {
  const defaultTooltipText = 'Copy to clipboard';

  const [tooltipText, setTooltipText] = useState(defaultTooltipText);

  const fieldRef = useRef(null);

  const copy = () => {
    try {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(value);
      } else if (window.clipboardData) { // ED
        window.clipboardData.setData('text', value);
      } else { // other browsers, iOS, Mac OS
        copyToClipboard(fieldRef.current);
      }

      setTooltipText(`Copied: ${value}`);
    } catch (error) {
      setTooltipText(`Please copy coupon manually.`);
    }
  };

  const copyToClipboard = (element) => {
    const prevContentEditable = element.contentEditable;
    const prevReadOnly = element.readOnly;

    try {
      element.contentEditable = 'true'; // specific to iOS
      element.readOnly = false;

      copyNodeContentsToClipboard(element);
    } finally {
      element.contentEditable = prevContentEditable;
      element.readOnly = prevReadOnly;
    }
  };

  const copyNodeContentsToClipboard = (element) => {
    const range = document.createRange();
    const selection = window.getSelection();

    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    element.setSelectionRange(0, 99999);

    document.execCommand('copy');
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
          onClick={copy}
          onMouseLeave={resetToDefault}
        />
      </div>
    </div>
  );
};

export default CopyToClipboard;