"use client";

import Image from "next/image";

import { Typography, Experiences } from "@/components";

const Intro = () => {
  return (
    <nav className="w-[484px] h-full py-12 flex flex-col justify-between px-8">
      <div className="flex flex-col gap-3">
        <div className="flex gap-4">
          <Image
            src="https://avatars.githubusercontent.com/u/91504362"
            alt="Shubham Patrick"
            width={64}
            height={64}
            className="rounded-full object-cover hover:shadow-xl hover:shadow-neutral-200 border border-neutral-200 cursor-pointer"
          />
          <div className="flex flex-col justify-end">
            <Typography data-cy="name" fontSize="lg" fontWeight="semibold">
              Shubham Patrick
            </Typography>
            <Typography data-cy="description" fontSize="sm" fontWeight="medium">
              Build beautiful user interfaces and experiences
            </Typography>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-3">
          <Image
            src="./twitter.svg"
            alt="twitter"
            width={48}
            height={48}
            className="cursor-pointer"
            data-cy="twitter-link"
            onClick={() => window.open("https://twitter.com/ahthneeuhl")}
          />
          <Image
            src="./github.svg"
            alt="github"
            width={48}
            height={48}
            data-cy="github-link"
            className="cursor-pointer"
            onClick={() => window.open("https://github.com/AHTHneeuhl")}
          />
          <Image
            src="./linkedin.svg"
            alt="linkedin"
            width={48}
            height={48}
            data-cy="linkedin-link"
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
            data-cy="instagram-link"
            className="cursor-pointer"
            onClick={() => window.open("https://instagram.com/ahthneeuhl/")}
          />
        </div>
      </div>
      <Experiences />
    </nav>
  );
};

export default Intro;
