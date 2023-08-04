
import DigitalDisplay from './DigitalDisplay';
import React, { useState, useEffect } from "react";
const ShowDi = () => {
    const [number,setNumber]=useState(1000000000);
    
    useEffect(() => {
        const interval = window.setInterval(() => {
            setNumber(Math.floor(Math.random() * 10000000000))
        }, 1000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);
    
  const value = number; // Giá trị để hiển thị (tối đa 10 chữ số)
  return (
    <div>
      <DigitalDisplay value={value} />
    </div>
  );
};

export default ShowDi;





