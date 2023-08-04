import React from "react";
import { notFound } from'next/navigation';
import { useLocale } from'next-intl';

import { Providers } from "./providers";
import "../../../styles/index.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Toolbar from "./components/Header"

config.autoAddCss = false;

export const metadata = {
  title: "3i-Sofware",
  description: "Được thành lâp vào tháng 3 năm 2006 với tiền thân là một đội chuyên gia phần mềm và giải pháp viễn thông có kinh nghiệm từ Hàn Quốc. Chúng tôi đang từng bước đạt được uy tín và niềm tin từ khách hàng với những sản phẩm công nghệ hiện đại và phù hợp với các doanh nghiệp trong nước và các đối tác nước ngoài như Hàn Quốc , Nhật Bản , Trung Quốc.",
};

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params?:any
}) {

  const locale = useLocale();


  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} className='bg-[#161F34]'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/* <head /> */}

      <body className="w-full h-[100vh] fixed top-0 right-0">
        <Providers >
          <Toolbar/>
          <main className="pt-[10px] h-[calc(100vh-88px)]">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

