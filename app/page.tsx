'use client'

import TopBanner from "@/components/TopBanner"
import TopComponent from "@/components/TopComponent";
import MainComponent from "@/components/MainComponent";

export default function Home() {
  return (
    <>
      <main>
        <TopBanner />
        <TopComponent />
        <MainComponent />
      </main>
    </>
  );
}