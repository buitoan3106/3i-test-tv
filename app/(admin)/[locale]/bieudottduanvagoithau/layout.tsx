import React from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Dashboard - Bieu do TT Du na va Goi thau",
    template: "%s | My Bieu do TT Du na va Goi thau",
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