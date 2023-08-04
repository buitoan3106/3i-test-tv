import React from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Dashboard - Customers",
    template: "%s | My Customers",
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