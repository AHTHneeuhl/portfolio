import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Intro } from "@/components";

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
      <body className={inter.className}>
        <Intro />
        <main className="ml-48 px-6">{children}</main>
      </body>
    </html>
  );
}
