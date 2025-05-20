import React, { useState } from 'react';

function CopyButton({ textToCopy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!textToCopy) return;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <button onClick={handleCopy}>Copiar al portapapeles</button>
      {copied && <span className="copied-msg">¡Copiado!</span>}
    </div>
  );
}

export default CopyButton;
