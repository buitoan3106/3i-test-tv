import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ClientOnly from "../components/ClientOnly";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Test webRtc",
    template: "%s | my-title",
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
    <div>{children}</div>
  );
}