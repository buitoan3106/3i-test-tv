import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "3i - Dashboard",
    template: "%s | My Dashboard",
  },
  description: {
    template: "%s",
  },
};

export default function WebRTC({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>{children}</>
  );
}