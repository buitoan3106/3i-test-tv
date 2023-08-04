"use client";
import { useState, useEffect } from "react";

import LineChart from "../components/Chart/LineChart";
import LineChart2 from "../components/Chart/LineChart2";
import PieChart from "../components/Chart/PieChart";

const Dashboard = () => {
  const [number, setNumber] = useState(1000000000);

  // useEffect(() => {
  //     const interval = window.setInterval(() => {
  //         setNumber(Math.floor(Math.random() * 10000000000))
  //     }, 1000);

  //     // Clean up the interval when the component is unmounted
  //     return () => clearInterval(interval);
  // }, [setNumber]);

  return (
    <div className="w-full h-full flex flex-wrap px-[15px] py-[10px]">
      <div className="w-8/12 h-full px-[15px]">
        <LineChart className="h-full"/>
      </div>
      <div className="w-4/12 h-full flex flex-col justify-between px-[15px]" >
        <PieChart className="h-[48%]"/>
        <div className="h-[48%]"><LineChart2 /></div>
      </div>
    </div>
  );
};

export default Dashboard;