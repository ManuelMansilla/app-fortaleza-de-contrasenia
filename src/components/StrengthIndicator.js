import React from 'react';

function calculateStrength(pwd) {
  let score = 0;
  if (pwd.length >= 8) score++;
  if (pwd.length >= 12) score++;
  const classesCount = [
    /[a-z]/.test(pwd),
    /[A-Z]/.test(pwd),
    /[0-9]/.test(pwd),
    /[^A-Za-z0-9]/.test(pwd)
  ].filter(Boolean).length;
  score += classesCount;
  if (/(.)\1\1/.test(pwd)) score--; // penaliza repeticiones
  if (score < 3) return 'Poco segura';
  if (score < 5) return 'Segura';
  return 'Muy segura';
}

function StrengthIndicator({ password }) {
  const level = calculateStrength(password);
  const color = level === 'Poco segura'
    ? '#dc3545'
    : level === 'Segura'
      ? '#fd7e14'
      : '#28a745';

  return (
    <div className="strength" style={{ color }}>
      Fortaleza: {level}
    </div>
  );
}

export default StrengthIndicator;
