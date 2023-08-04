"use client";
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

interface LineChartPros {
    className?: string;
}

const LineChart: React.FC<LineChartPros> = ({className}) => {
    async function getNewSeries(lastDate, options) {
        const response = await fetch(`/api/data?lastDate=${lastDate}&min=${options.min}&max=${options.max}`);
        const data = await response.json();
        return data;
    }
    const [product, setProduct] = useState(
        [
            {
                name: "T-shirt",
                data: [234, 45, 67, 987, 345, 456, 87, 321, 45, 569, 76, 890]
            },
            {
                name: "Shirt",
                data: [562, 145, 267, 97, 45, 156, 87, 321, 845, 969, 706, 20]
            },
            {
                name: "Jeans",
                data: [1012, 345, 117, 697, 845, 56, 287, 1321, 1845, 469, 306, 120]
            }
        ]
    );

    const [option, setOption] = useState(
        {
            title: { text: "Total Revenue", style: {color: "white"}},
            xaxis: {
                title: { text: "Product Sell in Months", style: {color: "white"}},
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    style: { colors: "#fff"},
                }
            },
            yaxis: {
                title: { text: "Product in K", style: { color: "#fff" }},
                labels: {
                    style: { colors: "#fff"},
                }
            },
            // annotations: {
            //     texts: [{foreColor: 'white'}]
            // }
            legend: {
                labels: {
                    colors: "white",
                }
            }
        }
    );

    const animation = {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
            speed: 700
        }
    }

    useEffect(() => {
        const interval = window.setInterval(() => {
            const lastDate = new Date();
            getNewSeries(lastDate, { min: 10, max: 90 }).then((data) => {
                ApexCharts.exec('realtime', 'updateSeries', [{ data }]);
            });
        }, 1000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    // Hàm này mô phỏng việc dữ liệu thay đổi liên tục theo thời gian
    useEffect(() => {
        const interval = setInterval(() => {
            setProduct(prevProduct => prevProduct.map(prod => ({
                ...prod,
                data: prod.data.map(value => value + Math.floor(Math.random() * 100) - 38), // Tăng giá trị mỗi điểm dữ liệu ngẫu nhiên trong khoảng từ -50 đến 50
            })));
        }, 2000); // Thêm dữ liệu mới sau mỗi 1 giây

        return () => clearInterval(interval);
    }, [setProduct]);

    return (
        <div className={`w-full border-[1px] border-[#038DC5] p-[10px] ${className}`}>
            <Chart
                type='line'
                animations={animation}
                // width={'100%'}
                height={'100%'}
                series={product}
                options={option}
            >
            </Chart>
        </div>
    );
}

export default LineChart;