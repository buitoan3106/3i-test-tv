import React from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Dashboard - Du an va goi thau",
    template: "%s | My Du an va goi thau",
  },
  description: {
    template: "%s",
  },
};

export default function Purchase({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  );
}