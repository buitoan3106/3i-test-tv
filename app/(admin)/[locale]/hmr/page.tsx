"use client";
import { useState, useEffect } from "react";

import LineChart from "../components/Chart/LineChart";
import FlipFlop from "../components/Chart/FlipFlop";
import Video from "../components/Chart/Video";

const Dashboard = () => {
  const [number, setNumber]=useState(1000000000);

  // useEffect(() => {
  //     const interval = window.setInterval(() => {
  //         setNumber(Math.floor(Math.random() * 10000000000))
  //     }, 1000);

  //     // Clean up the interval when the component is unmounted
  //     return () => clearInterval(interval);
  // }, [setNumber]);

  return (
    <div className="w-full h-full px-[15px] py-[10px]">
      <div className="flex h-full flex-wrap mx-[-15px]">
        <div className="w-8/12 px-[15px]">
          <LineChart className="h-full"/>
        </div>
        <div className="h-full flex flex-col justify-between w-4/12 px-[15px]">
          <Video type="youtube" src="https://www.youtube.com/embed/w9KsvkSt3dU" className="mb-[30px] h-[50%]"/>
          <FlipFlop className="h-[48%]"/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;