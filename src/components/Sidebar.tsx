"use client";

import sidebar from "@/config/sidebar";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 flex flex-col items-start justify-center gap-2 p-4 h-screen bg-neutral-50">
      {sidebar.map(({ title, path }) => (
        <Link key={title} href={path}>
          <span className="text-neutral-700 font-normal">{title}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
