import { Home } from "@/components";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shubham Patrick",
  description: "Shubham Patrick | Portfolio",
};

export default function Page() {
  return (
    <main>
      <Home />
    </main>
  );
}
