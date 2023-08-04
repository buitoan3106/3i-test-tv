"use client";
import { useState, useEffect } from "react";

import BarChart from "../components/Chart/BarChart";
import LineChart from "../components/Chart/LineChart";
import PieChart from "../components/Chart/PieChart";

const Dashboard = () => {
  const [number,setNumber]=useState(1000000000)
  useEffect(() => {
      const interval = window.setInterval(() => {
          setNumber(Math.floor(Math.random() * 10000000000))
      }, 1000);

      // Clean up the interval when the component is unmounted
      return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full px-[15px] py-[10px]">
      <div className="h-full flex flex-wrap mx-[-15px]">
        <div className="h-full w-8/12 px-[15px]">
          <BarChart className="h-full"/>
        </div>
        <div className="h-full w-4/12 px-[15px]">
          <div className="h-full flex flex-col justify-between">
            <PieChart className="h-[48%]"/>
            <LineChart className="h-[48%]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;