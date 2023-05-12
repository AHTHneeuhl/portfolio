import { Experience, Hero, Navbar, Projects } from "@/components";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <main>
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
      </main>
    </Fragment>
  );
}
