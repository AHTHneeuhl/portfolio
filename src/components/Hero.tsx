"use client";

import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-start pt-40 pb-48 bg-neutral-50 text-center">
      <h4 className="font-medium text-xl text-neutral-700 leading-10 mb-6">
        Hi, there 👋
      </h4>
      <h2 className="text-2xl font-semibold text-neutral-800">
        I am{" "}
        <span className="font-semibold text-3xl text-neutral-700">
          Shubham Patrick,{" "}
        </span>
        Frontend Engineer
      </h2>
      <p className="mt-2 text-neutral-700">
        Build beautiful interfaces & experiences
      </p>
      <div className="flex flex-row items-center justify-center gap-5 mt-8">
        <BsGithub
          size={20}
          cursor="pointer"
          onClick={() => window.open("https://github.com/AHTHneeuhl")}
        />
        <BsLinkedin
          size={20}
          cursor="pointer"
          onClick={() => window.open("https://www.linkedin.com/in/ahthneeuhl/")}
        />
        <BsTwitter
          size={20}
          cursor="pointer"
          onClick={() => window.open("https://twitter.com/ahthneeuhl")}
        />
        <BsInstagram
          size={20}
          cursor="pointer"
          onClick={() => window.open("https://instagram.com/ahthneeuhl")}
        />
      </div>
    </section>
  );
};

export default Hero;
