"use client";
import { useState, useEffect } from "react";

import BarChart from "../components/Chart/BarChart";
import TextBox from "../components/Chart/TextBox";
import DigitalDisplay from "../components/Chart/DigitalDisplay";

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
      <div className="flex h-full flex-wrap mx-[-15px]">
        <div className="flex flex-col justify-between w-8/12 px-[15px]">
          <DigitalDisplay value={number} className="mb-[20px]"/>
          <BarChart className="h-full"/>
        </div>
        <div className="w-4/12 px-[15px]">
          <TextBox title="Tin nội bộ" showTime className="h-full"/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;