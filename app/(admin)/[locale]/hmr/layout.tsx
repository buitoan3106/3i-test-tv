import React from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Dashboard - Purchase Contract",
    template: "%s | My Purchase contract",
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