import React from 'react';

const Answer42 = () => {
  const universalAnswer = 6 * 7;
  const tip = 'Astuce';
  return (
    <p>
      {tip}: {'la'.toUpperCase()} réponse universelle est {universalAnswer}
    </p>
  );
};

export default Answer42;
