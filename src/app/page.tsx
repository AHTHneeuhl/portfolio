import { Hero, Navbar } from "@/components";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shubham Patrick",
  description: "Shubham Patrick | Portfolio",
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
    </main>
  );
}
