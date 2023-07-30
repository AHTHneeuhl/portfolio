import { Home, Works } from "@/components";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shubham Patrick",
  description: "Shubham Patrick | Portfolio",
};

export default function Page() {
  return (
    <main>
      <Works />
    </main>
  );
}
