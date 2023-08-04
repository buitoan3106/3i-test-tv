"use client";
import React, { useRef } from 'react';
import Link from "next/link";
import ReactDOM from 'react-dom';
import { faChartBar, faChartArea, faChartLine,faArrowTrendDown,faChartPie } from "@fortawesome/free-solid-svg-icons";

import AwesomeIcon from  "../Commons/AwesomeIcon";

const Header = () => {
    const menuContainerRef = useRef(null);
    const menuData = [
        {
            id: 1,
            icon: faChartBar,
            title: 'Tiến độ công việc',
            url: '/work-progress'
        },
        {
            id: 2,
            icon: faChartArea,
            title: 'Quản lý nhân sự',
            url: '/hmr'
        },
        {
            id: 3,
            icon: faChartLine,
            title: 'Hợp đồng mua',
            url: '/purchase-contract'
        },
        {
            id: 4,
            icon: faArrowTrendDown,
            title: 'Hợp đồng bán',
            url: '/sale-contract'
        },
        {
            id: 5,
            icon: faChartPie,
            title: 'Biểu đồ TT HD mua',
            url: '/pay-purchase-bill'
        },
        {
            id: 6,
            icon: faChartArea,
            title: 'Biểu đồ TT HD bán',
            url: '/pay-sale-bill'
        },
        {
            id: 7,
            icon: faChartBar,
            title: 'Khách hàng',
            url: '/customers'
        },
        {
            id: 8,
            icon: faChartArea,
            title: 'Biểu đồ TT khách hàng',
            url: '/pay-customers-bill'
        },
        {
            id: 9,
            icon: faChartLine,
            title: 'Nhà cung cấp',
            url: '/nhacungcap'
        },
        {
            id: 10,
            icon: faArrowTrendDown,
            title: 'Biểu đồ TT nhà cung cấp',
            url: '/pay-suppliers-bill'
        },
        {
            id: 11,
            icon: faChartPie,
            title: 'Dự án & gói thầu',
            url: '/duanvagoithau'
        },
        {
            id: 12,
            icon: faChartArea,
            title: 'Biểu đồ TT dự án và gói thầu',
            url: '/bieudottduanvagoithau'
        },
        {
            id: 13,
            icon: faChartBar,
            title: 'Quỹ',
            url: '/quy'
        },
        {
            id: 14,
            icon: faChartPie,
            title: 'Biểu đồ tài sản',
            url: '/bieudotaisan'
        },
        {
            id: 15,
            icon: faChartArea,
            title: 'Biểu đồ TT tài sản',
            url: '/bieudotttaisan'
        },
        {
            id: 16,
            icon: faChartBar,
            title: 'Vật tư thiết bị',
            url: '/vattuthietbi'
        }
        
    ]

    const handleMouseEnter = () => {
        // Kích hoạt sự kiện click trên menu khi con trỏ chuột đi vào vùng menu
        menuContainerRef.current.click();
    };
    
    const handleMenuClick = () => {
        // Xử lý hành động khi menu được click
        // Ví dụ: điều hướng đến trang mới, hiển thị các thông báo, vv.
        console.log('Menu được click!');
    };

    return (
        <div className="flex flex-wrap items-center justify-between shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] px-[24px] py-[15px]">
            <div className="flex flex-wrap items-center w-full">
                <ul className="flex items-center space-x-[70px] whitespace-nowrap w-full py-[10px] overflow-x-auto scrollbar-thin"
                    ref={menuContainerRef}
                    onClick={handleMenuClick}
                    onMouseEnter={handleMouseEnter}
                    tabIndex={0}
                >
                    {menuData && menuData.map((item) => (
                        <li key={item.id}>
                            <Link href={item.url} className="text-white text-[20px] font-semibold hover:text-[#09AA1A]">
                                <AwesomeIcon icon={item.icon} className="mr-[15px]"/>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;