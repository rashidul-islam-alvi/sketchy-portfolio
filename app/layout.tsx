import type { Metadata } from "next";
import { Indie_Flower } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";

const indie_flower = Indie_Flower({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${indie_flower.className} `}>
        <div className="w-full overflow-x-hidden md:overflow-x-visible horizontal-graph-bg ">
          <div className="mx-auto   md:w-[70%] ">
            <NavBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}