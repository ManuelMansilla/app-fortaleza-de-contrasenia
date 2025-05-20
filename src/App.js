import React, { useState } from 'react';
import PasswordInput from './components/PasswordInput';
import StrengthIndicator from './components/StrengthIndicator';
import CopyButton from './components/CopyButton';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">
      <h1>Fortaleza de Contraseña 🔒</h1>
      <PasswordInput
        password={password}
        showPassword={showPassword}
        onPasswordChange={e => setPassword(e.target.value)}
        onToggleShow={() => setShowPassword(p => !p)}
      />
      <StrengthIndicator password={password} />
      <CopyButton textToCopy={password} />
      <PasswordGenerator onGenerate={setPassword} />
    </div>
  );
}

export default App;
