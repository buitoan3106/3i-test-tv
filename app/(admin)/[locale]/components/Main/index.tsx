"use client"
import { LuClock3 } from "react-icons/lu";
import { TfiWallet } from "react-icons/tfi"

import Notification from "../../components/Main/Notification";
import CounterUp from "../Chart/CounterUp";
import LineChart from "../Chart/LineChart";
import PieChart from "../Chart/PieChart";
import BarChart from "../Chart/BarChart";
import AreaChart from "../Chart/AreaChart";
import ShowDi from "../Chart/Showdigital";
import LineChart2 from "../Chart/LineChart2";

import Number from "../../components/Main/Number";

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "./index.css"
import ReactCardFlip from "react-card-flip";
import Image from "next/image";
import hinh11 from "./images/hinh11.jpg"
import hinh12 from "./images/hinh12.jpg"
import hinh21 from "./images/hinh21.png"
import hinh22 from "./images/hinh22.png"
import hinh31 from "./images/hinh31.png"
import hinh32 from "./images/hinh32.png"
import hinh41 from "./images/hinh41.jpg"
import hinh42 from "./images/hinh42.png"
// import hinh51 from "./images/hinh51.jpg"
// import hinh52 from "./images/hinh52.png"

const Index = () => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '70rem',
            backgroundColor: 'rgb(23 37 84)',
            height: '80vh',
        },
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(23, 37, 84, 0.75)',
            zIndex: 1000,
        },
    };

    const [modalIsOpen, setIsOpen] = useState(false);
    const [chart, setChart] = useState();

    function openModal(chart) {
        setIsOpen(true);
        setChart(chart);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [flip, setFlip] = useState([false, false, false, false, false, false, false, false, false, false]);
    const change = (number) => {
        setFlip(prevFlip => {
            const updatedFlip = [...prevFlip]; // Tạo một bản sao của mảng flip để cập nhật giá trị mới
            updatedFlip[number] = !updatedFlip[number]; // Thay đổi giá trị tại vị trí a thành "aaA"
            return updatedFlip;
        });
    };

    return (
        <div className="mx-[-15px] h-full flex flex-wrap items-start mb-[50px]">
            {/* <div className="w-8/12 px-[15px] mt-[24px]">
                <Notification/>
            </div>

            <div className="w-2/12 px-[15px] mt-[24px]">
                <Number title="Profit" number="$12,628" growth="+72.80%" icon={LuClock3} />
            </div>

            <div className="w-2/12 px-[15px] mt-[24px]">
                <Number title="Sales" number="$4,679" growth=" +28.42%" icon={TfiWallet} colorIcon="#03c3ec" />
            </div> */}

            <div className="w-6/12 h-[60vh] px-[15px] mt-[24px]" onClick={() => openModal('LineChart')}>
                <div className="h-full shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] "><LineChart className="h-full"/></div>
            </div>

            <div className="w-6/12 h-[60vh] flex flex-wrap px-[15px] mt-[24px]" >
                <div className="w-6/12 h-3/6 shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px]" onClick={() => openModal('PieChart')}><PieChart className="h-full"/></div>
                <div className="w-6/12 h-3/6 shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px]" onClick={() => openModal('BarChart')}><BarChart className="h-full"/></div>
                <div className="w-6/12 h-3/6 shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]" onClick={() => openModal('LineChart2')}><LineChart2 /></div>
                <div className="w-6/12 h-3/6 shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]" onClick={() => openModal('AreaChart')}><AreaChart /></div>
            </div>

            <div className="w-4/12 flex flex-wrap px-[15px] mt-[24px]">
                <div className="w-4/12 "><iframe width={'100%'} src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe></div>
                <div className="w-4/12 "><iframe width={'100%'} src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe></div>
                <div className="w-4/12 "><iframe width={'100%'} src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe></div>
                <div className="w-4/12 "><iframe width={'100%'} src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe></div>
                <div className="w-4/12 "><iframe width={'100%'} src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe></div>
                <div className="w-4/12 "><iframe width={'100%'} src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe></div>
                <div className="w-4/12 "><iframe width={'100%'} src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe></div>
                <div className="w-4/12 "><iframe width={'100%'} src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe></div>
                <div className="w-4/12 "><iframe width={'100%'} src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe></div>
            </div>
            <div className="w-8/12 px-[15px] mt-[24px]" >
                <div className="shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]"><ShowDi /></div>
            </div>
            <ReactCardFlip isFlipped={flip[0]}
                flipDirection="horizontal">
                <div className="w-12/12 px-[15px] mt-[24px]" onClick={() => change(0)} >
                    <div className="shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]">
                        <Image src={"/images/admin/flip/flip1.png"} className="images_flip" width={500} height={500} alt="aaaa"></Image>
                    </div>
                </div>
                <div className="w-12/12 px-[15px] mt-[24px]" onClick={() => change(0)}>
                    <div className="shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]">
                        <Image src={"/images/admin/flip/flip2.png"} className="images_flip" width={500} height={500} alt="aaaa"></Image>
                    </div>
                </div>
            </ReactCardFlip>
            <ReactCardFlip isFlipped={flip[1]}
                flipDirection="vertical">
                <div className="w-12/12 px-[15px] mt-[24px]" onClick={() => change(1)}>
                    <div className="shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]">
                        <Image src={hinh11} className="images_flip" width={500} height={500} alt="aaaa"></Image>
                    </div>
                </div>
                <div className="w-12/12 px-[15px] mt-[24px]" onClick={() => change(1)}>
                    <div className="shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]">
                        <Image src={hinh12} className="images_flip" width={500} height={500} alt="aaaa"></Image>
                    </div>
                </div>
            </ReactCardFlip>

            <div className="w-4/12 px-[15px] mt-[24px]" onClick={() => openModal('CounterUp')}>
                <div className="shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]"><CounterUp /></div>
            </div>

            <ReactCardFlip isFlipped={flip[2]}
                flipDirection="horizontal">
                <div className="w-12/12 px-[15px] mt-[24px]" onClick={() => change(2)}>
                    <div className="shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]">
                        <Image src={hinh21} className="images_flip" width={500} height={500} alt="aaaa"></Image>
                    </div>
                </div>
                <div className="w-12/12 px-[15px] mt-[24px]" onClick={() => change(2)}>
                    <div className="shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]">
                        <Image src={hinh22} className="images_flip" width={500} height={500} alt="aaaa"></Image>
                    </div>
                </div>
            </ReactCardFlip>
            <ReactCardFlip isFlipped={flip[3]}
                flipDirection="vertical">
                <div className="w-12/12 px-[15px] mt-[24px]" onClick={() => change(3)}>
                    <div className="shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]">
                        <Image src={hinh31} className="images_flip" width={500} height={500} alt="aaaa"></Image>
                    </div>
                </div>
                <div className="w-12/12 px-[15px] mt-[24px]" onClick={() => change(3)}>
                    <div className="shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]">
                        <Image src={hinh32} className="images_flip" width={500} height={500} alt="aaaa"></Image>
                    </div>
                </div>
            </ReactCardFlip>
            <ReactCardFlip isFlipped={flip[4]}
                flipDirection="horizontal">
                <div className="w-12/12 px-[15px] mt-[24px]" onClick={() => change(4)}>
                    <div className="shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]">
                        <Image src={hinh41} className="images_flip" width={500} height={500} alt="aaaa"></Image>
                    </div>
                </div>
                <div className="w-12/12 px-[15px] mt-[24px]" onClick={() => change(4)}>
                    <div className="shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]">
                        <Image src={hinh42} className="images_flip" width={500} height={500} alt="aaaa"></Image>
                    </div>
                </div>
            </ReactCardFlip>
            
            <ReactCardFlip isFlipped={flip[0]}
                flipDirection="horizontal">
                <div className="w-12/12 px-[15px] mt-[24px]" onClick={() => change(0)} >
                    <div className="shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]">
                        <Image src={"https://wallpaperaccess.com/full/3909258.jpg"} className="images_flip" width={500} height={500} alt="aaaa"></Image>
                    </div>
                </div>
                <div className="w-12/12 px-[15px] mt-[24px]" onClick={() => change(0)}>
                    <div className="shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]">
                        <Image src={"https://miro.medium.com/v2/resize:fit:720/0*OHZ-Hc4aANqMq141.png"} className="images_flip" width={500} height={500} alt="aaaa"></Image>
                    </div>
                </div>
            </ReactCardFlip>

            {/* <ReactCardFlip isFlipped={flip[5]}
                flipDirection="vertical">
                <div className="w-12/12 px-[15px] mt-[24px]" onClick={() => change(5)}>
                    <div className="shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]">
                        <Image src={hinh51} className="images_flip" width={500} height={500} alt="aaaa"></Image>
                    </div>
                </div>
                <div className="w-12/12 px-[15px] mt-[24px]" onClick={() => change(5)}>
                    <div className="shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]">
                        <Image src={hinh52} className="images_flip" width={500} height={500} alt="aaaa"></Image>
                    </div>
                </div>
            </ReactCardFlip>  */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {
                    chart === 'LineChart' ? (<LineChart className="h-full"/>) : ''
                }
                {
                    chart === 'BarChart' ? (<BarChart className="h-full"/>) : ''
                }
                {
                    chart === 'LineChart2' ? (<LineChart2 />) : ''
                }
                {
                    chart === 'AreaChart' ? (<AreaChart />) : ''
                }
                {
                    chart === 'PieChart' ? (<PieChart className="h-full"/>) : ''
                }
                {
                    chart === 'CounterUp' ? (<CounterUp />) : ''
                }
            </Modal>

        </div>
    );
}

export default Index;