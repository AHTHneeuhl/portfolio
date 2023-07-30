"use client";

import Image from "next/image";

import { AHTHneeuhl, Typography } from "@/components";

const Intro: React.FC = () => {
  return (
    <nav className="w-[384px] h-full py-12 flex flex-col justify-between px-8">
      <AHTHneeuhl />
      <div className="flex flex-col gap-3">
        <Image
          src="https://avatars.githubusercontent.com/u/91504362"
          alt="Shubham Patrick"
          width={144}
          height={144}
          className="rounded-full object-cover"
        />
        <Typography fontSize="lg" fontWeight="semibold">
          Shubham Patrick
        </Typography>
        <Typography fontSize="sm" fontWeight="medium">
          Build beautiful user interfaces and experiences
        </Typography>
        <div className="flex flex-row items-center justify-end gap-3">
          <Image
            src="./twitter.svg"
            alt="twitter"
            width={48}
            height={48}
            className="cursor-pointer"
            onClick={() => window.open("https://twitter.com/ahthneeuhl")}
          />
          <Image
            src="./github.svg"
            alt="github"
            width={48}
            height={48}
            className="cursor-pointer"
            onClick={() => window.open("https://github.com/AHTHneeuhl")}
          />
          <Image
            src="./linkedin.svg"
            alt="linkedin"
            width={48}
            height={48}
            className="cursor-pointer"
            onClick={() =>
              window.open("https://www.linkedin.com/in/ahthneeuhl/")
            }
          />
          <Image
            src="./instagram.svg"
            alt="instagram"
            width={48}
            height={48}
            className="cursor-pointer"
            onClick={() => window.open("https://instagram.com/ahthneeuhl/")}
          />
        </div>
      </div>
    </nav>
  );
};

export default Intro;
