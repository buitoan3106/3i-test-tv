import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const LineChart2 = () => {
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
            text: "Line Chart",
            style: {color: "white"}
        },

        subtitle: {
            text: "This is Line Chart Graph",
            style: {color: "white"}
        },

        xaxis: {
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
                style: {color: "white"}
            },
            labels: {
                style: { colors: "#fff"},
            }
        },

        yaxis: {
            labels: {
                formatter: (val) => {
                    return `${val}`;
                },
                style: { colors: "#fff"},
            },
            title: {
                text: "User In (K)",
                style: {color: "white"}
            },
        },

        legend: {
            show: true,
        },

        dataLabels: {
            formatter: (val) => {
                return `${val}`;
            },
        }
    });

    return (
        <div className="w-full h-full">
            <Chart
                type="line"
                // width={'100%'}
                height={'100%'}
                series={series}
                options={option}
                animations={animation}
            ></Chart>
        </div>
    );
};

export default LineChart2;
