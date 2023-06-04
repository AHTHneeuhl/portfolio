"use client";

import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import { socialLinks } from "@/config/socialLinks";

const Intro: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-start pt-40 pb-48 text-center">
      <h4 className="font-medium text-xl text-neutral-700 leading-10 mb-6">
        Hi, there 👋
      </h4>
      <h2 className="text-2xl font-semibold text-neutral-800" data-cy="title">
        I am{" "}
        <span
          className="font-semibold text-3xl text-neutral-700"
          data-cy="name"
        >
          Shubham Patrick,{" "}
        </span>
        Frontend Engineer
      </h2>
      <p className="mt-2 text-neutral-700" data-cy="description">
        Build beautiful interfaces & experiences
      </p>
      <div className="flex flex-row items-center justify-center gap-5 mt-8">
        <BsGithub
          size={20}
          cursor="pointer"
          data-cy="github-link"
          onClick={() => window.open(socialLinks.github)}
        />
        <BsLinkedin
          size={20}
          cursor="pointer"
          data-cy="linkedin-link"
          onClick={() => window.open(socialLinks.linkedin)}
        />
        <BsTwitter
          size={20}
          cursor="pointer"
          data-cy="twitter-link"
          onClick={() => window.open(socialLinks.twitter)}
        />
        <BsInstagram
          size={20}
          cursor="pointer"
          data-cy="instagram-link"
          onClick={() => window.open(socialLinks.instagram)}
        />
      </div>
    </section>
  );
};

export default Intro;
