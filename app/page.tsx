'use client'

import TopBanner from "@/components/TopBanner"
import TopComponent from "@/components/TopComponent";
import MainComponent from "@/components/MainComponent";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("api/setUser");
  })
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