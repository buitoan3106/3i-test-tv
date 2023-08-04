import React from 'react';
import Link from "next/link";
import { faNewspaper, faCalendarDays, faDownload, faFile, faFileExcel } from "@fortawesome/free-solid-svg-icons";

import { getCurrentDate } from "../../utils/util";
import AwesomeIcon from "../Commons/AwesomeIcon";
import TypeFile from "../Commons/TypeFile";

interface TextBoxProps {
    title: string;
    className?: string;
    showTime?: boolean;
}

const TextBox: React.FC<TextBoxProps> = ({ title, className, showTime }) => {
    const textBoxData = [
        {
            id: 1,
            title: "Thông báo tuyển dụng nhân sự tháng 01-2023",
            published: "02:00 10/02/2023",
            files: [
                {
                    id: 1,
                    title: "Báo cáo",
                    type: "pptx",
                    pathFile: "https://backend.smartwork.3i.com.vn/uploads/files/SmartWork_0a79052b.pptx"
                },
                {
                    id: 2,
                    title: "Hướng dẫn",
                    type: "docx",
                    pathFile: "https://backend.smartwork.3i.com.vn/uploads/files/Thẻ việc-Web _08f81aab.docx"
                },
                {
                    id: 3,
                    title: "Người dùng",
                    type: "xlsx",
                    pathFile: "https://backend.smartwork.3i.com.vn/uploads/files/Thẻ việc-Web _08f81aab.docx"
                },
            ]
        },
        {
            id: 2,
            title: "Kinh doanh vận tải",
            published: "02:00 10/02/2023",
            files: []
        },
        {
            id: 3,
            title: "Lịch sử hình thành nhà máy",
            published: "02:00 10/02/2023",
            files: []
        },
        {
            id: 4,
            title: "Clinker",
            published: "02:00 10/02/2023",
            files: []
        },
        {
            id: 5,
            title: "Danh sách nhân sự TT group",
            published: "02:00 10/02/2023",
            files: []
        },
    ];

    return (
        <div className={`w-full border-[1px] border-[#038DC5] p-[10px] ${className}`}>
            <h2 className="text-white uppercase font-semibold mb-[20px]">
                <span className="border-b-[1px] mr-[7px]">{title}</span>
                <span>{showTime && getCurrentDate()}</span>
            </h2>
            <ul>
                {textBoxData && textBoxData.map((item) => (
                    <li key={item.id} className="py-[10px] border-b-[1px] border-dashed border-[#09AA1A] last:border-b-0">
                        <div className="text-[#09AA1A]">
                            <AwesomeIcon icon={faNewspaper} className="mr-[7px]" />
                            <span>{item.title}</span>
                        </div>
                        <div className="text-[#3071AB] pl-[10px] text-[12px]">
                            <AwesomeIcon icon={faCalendarDays} className="mr-[7px]" />
                            <span>{item.published}</span>
                        </div>
                        {item.files.length > 0 &&
                            <div className="mt-[10px] pl-[10px] text-[12px] text-white">
                                <ul className="inline-block min-w-[150px]">
                                    {item.files.map ((file) => (
                                        <li key={file.id} className="flex flex-wrap items-center mb-[5px]">
                                            <TypeFile type={file.type} className="mr-[7px]" />
                                            <span className="flex-1">{file.title}</span>
                                            <Link href={file.pathFile} className="ml-[7px]"><AwesomeIcon icon={faDownload} /></Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TextBox;