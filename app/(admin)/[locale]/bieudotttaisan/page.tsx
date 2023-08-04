"use client";
import { useState, useEffect } from "react";

import PieChart from "../components/Chart/PieChart";
import AreaChart from "../components/Chart/AreaChart";
import LineChart2 from "../components/Chart/LineChart2";

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
        <div className="w-8/12 h-full px-[15px]">
          <AreaChart/>
        </div>
        <div className="h-full flex flex-col justify-between w-4/12 px-[15px]">
          <div className="h-[48%] w-full"><LineChart2/></div>
          <PieChart className="h-[48%]"/>
        </div>
      </div>
    </div>
  );
};

export default Customers;