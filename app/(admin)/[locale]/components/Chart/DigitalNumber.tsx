import React from 'react';
import './DigitalNumber.css';

const DIGIT_MAPPING = {
  0: [
    true, true, true, 
    true, false, true, 
    true, false, true, 
    true, false, true, 
    true, true, true
  ],
  1: [
    false, false, true, 
    false, false, true, 
    false, false, true, 
    false,false, true, 
    false, false, true
  ],
  2: [
    true, true, true,
    false, false, true, 
    true, true, true, 
    true,  false, false, 
    true, true, true
  ],
  3: [
    true, true, true, 
    false, false, true, 
    true, true, true, 
    false, false, true, 
    true, true, true
  ],
  4: [
    true, false, true, 
    true, false,     true, 
    true, true, true, 
    false, false, true, 
    false, false, true
  ],
  5: [
    true, true, true,
    true, false, false, 
    true, true, true, 
    false,  false, true, 
    true, true, true
  ],
  6: [
    true, true, true, 
    true, false, false, 
    true, true, true, 
    true, false, true, 
    true, true, true
  ],
  7: [
    true, true, true, 
    false, false, true, 
    false, false, true, 
    false,false, true, 
    false, false, true
  ],
  8: [
    true, true, true, 
    true, false, true, 
    true, true, true, 
    true,false, true, 
    true, true, true
  ],
  9: [
    true, true, true, 
    true, false, true, 
    true, true, true, 
    false,false, true, 
    true, true, true
  ],
  10: [
    false, false, false, 
    false, false, false, 
    false, false, false, 
    false,false, false, 
    false, true, false
  ],
};

const DigitalNumber = ({ number }) => {
  const segments = DIGIT_MAPPING[number];

  return (
    <div className="digital-number">
      <div className={`segment row1-left ${segments[0] ? 'lit' : ''}`} />
      <div className={`segment row1-middle ${segments[1] ? 'lit' : ''}`} />
      <div className={`segment row1-right ${segments[2] ? 'lit' : ''}`} />
      <div className={`segment row2-left ${segments[3] ? 'lit' : ''}`} />
      <div className={`segment row2-middle ${segments[4] ? 'lit' : ''}`} />
      <div className={`segment row2-right ${segments[5] ? 'lit' : ''}`} />
      <div className={`segment row3-left ${segments[6] ? 'lit' : ''}`} />
      <div className={`segment row3-middle ${segments[7] ? 'lit' : ''}`} />
      <div className={`segment row3-right ${segments[8] ? 'lit' : ''}`} />
      <div className={`segment row4-left ${segments[9] ? 'lit' : ''}`} />
      <div className={`segment row4-middle ${segments[10] ? 'lit' : ''}`} />
      <div className={`segment row4-right ${segments[11] ? 'lit' : ''}`} />
      <div className={`segment row5-left ${segments[12] ? 'lit' : ''}`} />
      <div className={`segment row5-middle ${segments[13] ? 'lit' : ''}`} />
      <div className={`segment row5-right ${segments[14] ? 'lit' : ''}`} />
    </div>
  );
};

export default DigitalNumber;
