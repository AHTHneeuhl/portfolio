import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components";

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
        <Sidebar />
        <main className="min-w-0 px-2 md:px-0">{children}</main>
      </body>
    </html>
  );
}
