"use client"
import Toolbar from "../components/Header";
import Modal from 'react-modal';
import React, { useState } from 'react';
import LineChart from "../components/Chart/LineChart";
import PieChart from "../components/Chart/PieChart";
import BarChart from "../components/Chart/BarChart";
import AreaChart from "../components/Chart/AreaChart";
import LineChart2 from "../components/Chart/LineChart2";


const Chart = () => {
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
    return (
        <div className="w-[100%] mx-[auto] px-[15px]">
            <Toolbar />
            {/* <iframe
          src={`/dashboad/html/index.html`}
          width="5000px"
          height="5000px"
          title="Embedded Content"
        ></iframe> */}
            <div className="mx-[-15px] flex flex-wrap items-start mb-[50px]">
                {/* <div className="w-8/12 px-[15px] mt-[24px]">
                <Notification/>
            </div>

            <div className="w-2/12 px-[15px] mt-[24px]">
                <Number title="Profit" number="$12,628" growth="+72.80%" icon={LuClock3} />
            </div>

            <div className="w-2/12 px-[15px] mt-[24px]">
                <Number title="Sales" number="$4,679" growth=" +28.42%" icon={TfiWallet} colorIcon="#03c3ec" />
            </div> */}

                <div className="w-6/12 px-[15px] mt-[24px]" onClick={() => openModal('LineChart')}>
                    <div className="shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]"><LineChart /></div>
                </div>

                <div className="w-6/12 flex flex-wrap px-[15px] mt-[24px]" >
                    <div className="w-6/12 shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]" onClick={() => openModal('PieChart')}><PieChart /></div>
                    <div className="w-6/12 shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]" onClick={() => openModal('BarChart')}><BarChart /></div>
                    <div className="w-6/12 shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]" onClick={() => openModal('LineChart2')}><LineChart2 /></div>
                    <div className="w-6/12 shadow-[0_0_0.375rem_0.25rem_rgba(161,172,184,.15)] rounded-[7px] p-[24px]" onClick={() => openModal('AreaChart')}><AreaChart /></div>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button onClick={closeModal}>close</button>
                    {
                        chart === 'LineChart' ? (<LineChart />) : ''
                    }
                    {
                        chart === 'BarChart' ? (<BarChart />) : ''
                    }
                    {
                        chart === 'LineChart2' ? (<LineChart2 />) : ''
                    }
                    {
                        chart === 'AreaChart' ? (<AreaChart />) : ''
                    }
                    {
                        chart === 'PieChart' ? (<PieChart />) : ''
                    }
                </Modal>
            </div>
        </div>
    );
};

export default Chart;