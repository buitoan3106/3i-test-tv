"use client";
import { useState, useEffect } from "react";

import BarChart from "../components/Chart/BarChart";
import AreaChart from "../components/Chart/AreaChart";
import PieChart from "../components/Chart/PieChart";

const Customers = () => {
    const [number, setNumber] = useState(1000000000);

    // useEffect(() => {
    //     const interval = window.setInterval(() => {
    //         setNumber(Math.floor(Math.random() * 10000000000))
    //     }, 1000);

    //     // Clean up the interval when the component is unmounted
    //     return () => clearInterval(interval);
    // }, [setNumber]);

    return (
        <div className="w-full h-full px-[15px] py-[10px]">
            <div className="w-full h-full mx-[-15px] flex flex-wrap items-start mb-[50px]">
                <div className="w-8/12 h-full px-[15px]">
                    <AreaChart />
                </div>
                <div className="w-4/12 h-full flex flex-col justify-between px-[15px]" >
                    <PieChart className="h-[48%]"/>
                    <BarChart className="h-[48%]"/>
                </div>
            </div>
        </div >
    );
};

export default Customers;