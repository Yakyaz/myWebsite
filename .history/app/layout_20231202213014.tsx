import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="pastel">
      <body className={montserrat.className}>
        <Navbar />
        <div style={{ height: "calc(100vh - 60px)", overflowY: "auto" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
