"use client";

import sidebar from "@/config/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="h-screen fixed top-0 left-4 grid place-items-center">
      <div className="bg-white w-48 flex flex-col items-start justify-center gap-3 px-6 py-12 rounded-md">
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
    </nav>
  );
};

export default Navigation;
