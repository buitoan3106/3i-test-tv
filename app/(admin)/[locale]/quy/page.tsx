"use client";
import { useState, useEffect } from "react";

import BarChart from "../components/Chart/BarChart";
import AreaChart from "../components/Chart/AreaChart";
import DigitalDisplay from "../components/Chart/DigitalDisplay";

const Customers = () => {
  const [number, setNumber]=useState(1000000000);

  useEffect(() => {
      const interval = window.setInterval(() => {
          setNumber(Math.floor(Math.random() * 10000000000))
      }, 1000);

      // Clean up the interval when the component is unmounted
      return () => clearInterval(interval);
  }, [setNumber]);

  return (
    <div className="w-full h-full px-[15px] py-[10px]">
      <div className="flex h-full flex-wrap mx-[-15px]">
        <div className="w-6/12 px-[15px]">
          <BarChart className="h-full"/>
        </div>
        <div className="h-full flex flex-wrap w-6/12 px-[15px]">
          <div className="h-[48%] w-full"><AreaChart/></div>
          <DigitalDisplay value={number} className="w-full mb-[15%]"/>
        </div>
      </div>
    </div>
  );
};

export default Customers;