import React from 'react';
import './DigitalDisplay.css';
import DigitalNumber from './DigitalNumber';

interface DigitalDisplayProps {
  value: number;
  className?: string;
}

const DigitalDisplay: React.FC<DigitalDisplayProps> = ({ value, className }) => {
  const digits = value.toString().padStart(10, '0').slice(0, 10).split('');

  const check = (num) => {
    if (num > 0 && num % 3 === 0) {
      return <DigitalNumber key={11} number={10} />;
    }
    return null;
  };

  return (
    <div className={`digital-display ${className?className:''}`}>
      {digits.map((digit, index) => (
        <React.Fragment key={index}>
          {check(index+2)}
          <DigitalNumber key={index} number={parseInt(digit)} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default DigitalDisplay;
