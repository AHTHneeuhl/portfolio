import { Hero, Navbar } from "@/components";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <main>
        <Navbar />
        <Hero />
      </main>
    </Fragment>
  );
}
