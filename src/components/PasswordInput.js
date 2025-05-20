import React from 'react';

function PasswordInput({ password, showPassword, onPasswordChange, onToggleShow }) {
  return (
    <div>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={onPasswordChange}
        placeholder="Ingresa tu contraseña"
      />
      <button onClick={onToggleShow}>
        {showPassword ? 'Ocultar' : 'Mostrar'}
      </button>
    </div>
  );
}

export default PasswordInput;
