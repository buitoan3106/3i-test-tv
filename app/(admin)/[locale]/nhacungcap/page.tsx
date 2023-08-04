"use client";
import { useState, useEffect } from "react";

import BarChart from "../components/Chart/BarChart";
import LineChart2 from "../components/Chart/LineChart2";
import LineChart from "../components/Chart/LineChart";
import DigitalDisplay from "../components/Chart/DigitalDisplay";

const NhaCungCap = () => {
    const [number, setNumber] = useState(1000000000);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setNumber(Math.floor(Math.random() * 10000000000))
        }, 1000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(interval);
    }, [setNumber]);

    return (
        <div className="w-full h-full flex flex-wrap px-[15px] py-[10px]">
            <div className="w-6/12 h-full px-[15px]">
                <div className="h-full shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px]"><LineChart className="h-full"/></div>
            </div>
            <div className="w-6/12 h-full flex flex-col justify-between px-[15px]" >
                <DigitalDisplay value={number} className=" h-[48%]"/>
                <BarChart className="h-[48%]"/>
            </div>
        </div>
    );
};

export default NhaCungCap;