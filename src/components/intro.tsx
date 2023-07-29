"use client";

import Image from "next/image";
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

import { Typography } from "@/components";

const Intro: React.FC = () => {
  return (
    <nav className="h-screen w-[25vw] fixed top-0 left-0 bg-gradient grid place-items-center">
      <div>
        <Image
          src="https://avatars.githubusercontent.com/u/91504362"
          alt="Shubham Patrick"
          width={124}
          height={124}
          className="rounded-full object-cover mb-2"
        />
        <Typography fontSize="lg" fontWeight="semibold">
          Shubham Patrick
        </Typography>
        <Typography fontSize="sm" fontWeight="medium">
          Build beautiful interfaces & experiences
        </Typography>
        <div className="flex flex-row items-center justify-end gap-5 mt-5">
          <BsTwitter
            size={20}
            cursor="pointer"
            data-cy="twitter-link"
            onClick={() => window.open("https://twitter.com/ahthneeuhl")}
          />
          <BsGithub
            size={20}
            cursor="pointer"
            data-cy="github-link"
            onClick={() => window.open("https://github.com/AHTHneeuhl")}
          />
          <BsLinkedin
            size={20}
            cursor="pointer"
            data-cy="linkedin-link"
            onClick={() =>
              window.open("https://www.linkedin.com/in/ahthneeuhl/")
            }
          />
          <BsInstagram
            size={20}
            cursor="pointer"
            data-cy="instagram-link"
            onClick={() => window.open("https://instagram.com/ahthneeuhl/")}
          />
        </div>
      </div>
    </nav>
  );
};

export default Intro;
