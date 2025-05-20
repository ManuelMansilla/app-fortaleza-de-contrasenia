import React, { useState } from 'react';

function generatePassword(length, lower, upper, nums, special) {
  const sets = [
    lower ? 'abcdefghijklmnopqrstuvwxyz' : '',
    upper ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '',
    nums  ? '0123456789' : '',
    special ? '!@#$%^&*()_+[]{}|;:,.<>?' : ''
  ];
  const chars = sets.join('');
  let pwd = '';
  for (let i = 0; i < length; i++) {
    pwd += chars[Math.floor(Math.random() * chars.length)];
  }
  return pwd;
}

function PasswordGenerator({ onGenerate }) {
  const [advanced, setAdvanced] = useState(false);
  const [length, setLength] = useState(12);
  const [useLower, setUseLower] = useState(true);
  const [useUpper, setUseUpper] = useState(true);
  const [useNums, setUseNums] = useState(true);
  const [useSpecial, setUseSpecial] = useState(true);

  const handleGenerate = () => {
    const pwd = generatePassword(length, useLower, useUpper, useNums, useSpecial);
    onGenerate(pwd);
  };

  return (
    <div>
      <button onClick={handleGenerate}>Generar contraseña aleatoria</button>
      <button onClick={() => setAdvanced(a => !a)} style={{ marginLeft: '8px' }}>
        {advanced ? 'Ocultar opciones' : 'Mostrar opciones avanzadas'}
      </button>
      {advanced && (
        <div className="advanced-panel">
          <label>
            Largo:
            <input
              type="number"
              min="4"
              max="32"
              value={length}
              onChange={e => setLength(+e.target.value)}
            />
          </label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" checked={useLower} onChange={() => setUseLower(l => !l)} /> Minúsculas
            </label>
            <label>
              <input type="checkbox" checked={useUpper} onChange={() => setUseUpper(u => !u)} /> Mayúsculas
            </label>
            <label>
              <input type="checkbox" checked={useNums} onChange={() => setUseNums(n => !n)} /> Números
            </label>
            <label>
              <input type="checkbox" checked={useSpecial} onChange={() => setUseSpecial(s => !s)} /> Especiales
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default PasswordGenerator;
