"use client";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

interface BarChartPros {
    className?: string;
}

const BarChart: React.FC<BarChartPros> = ({className}) => {
    const [series, setSeries] = useState([
        {
            name: "Social Media Subscriber",
            data: [6578, 6787, 3245, 9876, 2324, 5123, 2435],
        },
    ]);

    // Hàm này mô phỏng việc dữ liệu thay đổi liên tục theo thời gian
    useEffect(() => {
        const interval = setInterval(() => {
            setSeries(prevSeries => prevSeries.map(sr => ({
                ...sr,
                data: sr.data.map(value => value + Math.floor(Math.random() * 1000) - 380), // Tăng giá trị mỗi điểm dữ liệu ngẫu nhiên trong khoảng từ -50 đến 50
            })));
        }, 2000); // Thêm dữ liệu mới sau mỗi 1 giây

        return () => clearInterval(interval);
    }, [setSeries]);

    const animation = {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
            speed: 700
        }
    }

    const [option, setOption] = useState({
        title: {
            text: "BarChar",
            // style: { fontSize: 30 , color: '#fff'},
            style: { color: '#fff' },
        },

        subtitle: {
            text: "This is BarChart Graph",
            // style: { fontSize: 18 },
            style: { color: '#fff' },
        },

        // colors: ["#f90000"],
        // theme: { mode: "dark"},

        xaxis: {
            // tickPlacement: "on",
            categories: [
                "Facebook",
                "Twitter",
                "Linkedin",
                "Instagram",
                "GitHub",
                "Stackoverflow",
                "Youtube",
            ],
            title: {
                text: "Social Media User",
                // style: { color: "#fff", fontSize: 30 }
                style: { color: "#fff" }
            },
            labels: {
                style: { colors: "#fff" },
            },
        },

        yaxis: {
            labels: {
                formatter: (val) => {
                    return `${val}`;
                },
                // style: { fontSize: "15", colors: ["#fff"] },
                style: { colors: ["#fff"] },
            },
            title: {
                text: "User In (K)",
                // style: { color: "#fff", fontSize: 15 },
                style: { color: "#fff" },
            }
        },

        legend: {
            show: true,
            // position: "right",
        },

        dataLabels: {
            formatter: (val) => {
                return `${val}`;
            },
            // style: {
            //     colors: ["#f4f4f4"],
            //     fontSize: 15,
            // },
            style: { colors: ["#fff"] },
        }
    })

    return (
        <div className={`w-full border-[1px] border-[#038DC5] p-[10px] ${className}`}>
            <Chart
                type="bar"
                // width={'100%'}
                height={'100%'}
                series={series}
                options={option}
                animations={animation}
            ></Chart>
        </div>
    )
};

export default BarChart;
