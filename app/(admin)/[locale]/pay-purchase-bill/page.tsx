"use client";
import { useState, useEffect } from "react";

import TextBox from "../components/Chart/TextBox";
import LineChart from "../components/Chart/LineChart";
import Video from "../components/Chart/Video";

const Dashboard = () => {
  const [number, setNumber] = useState(1000000000)
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
        <div className="w-8/12 h-full px-[15px]">
          <Video type="youtube" src="https://www.youtube.com/embed/w9KsvkSt3dU" className="h-full" />
        </div>
        <div className="w-4/12 h-full flex flex-col justify-between px-[15px]">
          <TextBox title="Thông tin" className="h-[48%] overflow-auto"/>
          <LineChart className="h-[48%]" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;