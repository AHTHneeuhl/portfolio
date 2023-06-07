"use client";

import sidebar from "@/config/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 w-48 flex flex-col items-start justify-center gap-3 p-4 h-screen">
      {sidebar.map(({ title, path }) => (
        <Link key={title} href={path}>
          <span
            className={`${
              pathname === path
                ? "text-blue-700 font-semibold bg-blue-100 rounded-md"
                : "font-medium text-neutral-500"
            } p-1 w-full`}
          >
            {title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
