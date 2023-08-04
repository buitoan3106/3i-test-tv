"use client";
import React  from "react";
import Link from "next/link";
import { BsFiletypeDocx, BsFilePpt, BsFileEarmarkExcel } from "react-icons/bs";
import { ItemDocumentProps } from "./Document";
interface DocumentItemProps{
  file: ItemDocumentProps
}

const DocumentItem: React.FC<DocumentItemProps> = ({ file }) => {
  return (
    <>
      {file.code === "File" && 
        <li className={`w-1/2 mt-[30px]`}>
          <Link href={`${process.env.BACKEND_URL}${file.value}`} className="hover:text-[green] hover:underline">
            <span className="inline-block mr-[7px] align-middle">
              {file.type === "CMA_TYPE20211029143540" ? <BsFiletypeDocx size={18}/> : ""}
              {file.type === "CMA_TYPE20211103150450" ? <BsFilePpt size={18}/> : ""}
              {file.type === "CMA_TYPE20211029143551" ? <BsFileEarmarkExcel size={18}/> : ""}
            </span>
            <span className="align-middle">{file.title}</span>
          </Link>
        </li>
      }
    </>
  );
};

export default DocumentItem;
