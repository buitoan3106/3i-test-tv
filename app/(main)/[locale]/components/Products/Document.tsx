"use client";
import React from "react";
import Link from "next/link";

import DocumentItem  from "./DocumentItem";

export interface ItemDocumentProps {
  code: string;
  title: string;
  value?: string;
  type?: string;
  multiple_language?: string | null
}
interface DocumentProps {
  title: string;
  fontfamily?: string;
  fontTitle?: string;
  content?: ItemDocumentProps[]
}

const Document: React.FC<DocumentProps> = ({ fontfamily, fontTitle, content, title }) => {
  return (
    <section id="Document" className={`w-full ${fontfamily} mt-[30px]`}>
      <div className="container mt-20">
        <h2 className={`text-[28px] font-bold text-center mb-[30px] ${fontTitle}`}>Tài liệu & hướng dẫn sử dụng {title}</h2>
        <ul className="flex flex-wrap">
          {content?.map((item, index) => (
            <DocumentItem key={index} file={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Document;