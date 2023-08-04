"use client";
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
// const XAXISRANGE = 86400000;

interface PreChartPros {
  className?: string;
}

const PieChart: React.FC<PreChartPros> = ({className}) => {
  const [series, setSeries] = useState([23, 43, 50, 54, 65]);

  // Hàm này mô phỏng việc dữ liệu thay đổi liên tục theo thời gian
  useEffect(() => {
    const interval = setInterval(() => {
      setSeries(dataArr => dataArr.map(value => value + Math.floor(Math.random() * 25) - 11));
    }, 2000); // Thêm dữ liệu mới sau mỗi 1 giây

    return () => clearInterval(interval);
  }, [setSeries]);

  const [option, setOption] = useState(
    {
      labels: ['Hindi', 'English', 'Math', 'Science', 'Social Science'],
      legend: {
        labels: {
          colors: "white",
        }
      }
    });

  const animation = {
    enabled: true,
    easing: 'linear',
    dynamicAnimation: {
      speed: 700
    }
  }

  return (
    <div className={`w-full border-[1px] border-[#038DC5] p-[10px] ${className}`}>
      <Chart
        type='pie'
        height={'100%'}
        series={series}
        options={option}
        animations={animation}
      >
      </Chart>
    </div>
  );
}

export default PieChart;