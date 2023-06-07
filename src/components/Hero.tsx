"use client";

import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

const Hero: React.FC = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="flex flex-col items-center justify-start text-center">
        <h4 className="font-medium text-xl text-neutral-700 leading-10 mb-6">
          Hi, there 👋
        </h4>
        <h2 className="text-2xl font-semibold text-neutral-700" data-cy="title">
          I am{" "}
          <span
            className="font-semibold text-3xl text-purple-800"
            data-cy="name"
          >
            Shubham Patrick,{" "}
          </span>
          Frontend Engineer
        </h2>
        <p className="mt-2 text-purple-800 font-medium" data-cy="description">
          Build beautiful interfaces & experiences
        </p>
        <div className="flex flex-row items-center justify-center gap-5 mt-8">
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
          <BsTwitter
            size={20}
            cursor="pointer"
            data-cy="twitter-link"
            onClick={() => window.open("https://twitter.com/ahthneeuhl")}
          />
          <BsInstagram
            size={20}
            cursor="pointer"
            data-cy="instagram-link"
            onClick={() => window.open("https://instagram.com/ahthneeuhl/")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
