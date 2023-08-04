import React from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Dashboard - Nha cung cap",
    template: "%s | My Nha cung cap",
  },
  description: {
    template: "%s",
  },
};

export default function NhaCungCap({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  );
}