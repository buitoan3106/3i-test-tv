import React from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Dashboard - Pay Customers Bill",
    template: "%s | My Pay Customers Bill",
  },
  description: {
    template: "%s",
  },
};

export default function Customers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  );
}