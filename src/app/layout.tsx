import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Intro } from "@/components";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Patrick",
  description: "Shubham Patrick | Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "h-screen px-12 bg-gradient-to-b from-primary-500 to-primary-400 flex flex-row justify-between overflow-hidden"
        )}
      >
        <Intro />
        <main className="w-[688px] h-screen overflow-auto hide-scrollbar">
          {children}
        </main>
      </body>
    </html>
  );
}
