"use client";
import { useState, useEffect } from "react";

import BarChart from "../components/Chart/BarChart";
import Video from "../components/Chart/Video";
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
        <div className="h-full flex flex-col justify-between w-6/12 px-[15px]">
          <Video type="youtube" src="https://www.youtube.com/embed/w9KsvkSt3dU" className="mb-[30px] h-[50%]"/>
          <DigitalDisplay value={number} className="mb-[15%]"/>
        </div>
      </div>
    </div>
  );
};

export default Customers;