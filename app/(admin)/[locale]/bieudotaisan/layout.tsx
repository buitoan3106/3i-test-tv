import React from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Dashboard - Bieu Do Tai San",
    template: "%s | My Bieu Do Tai San",
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