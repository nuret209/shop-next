'use client'

import TopBanner from "@/components/TopBanner"
import TopComponent from "@/components/TopComponent";
import MainComponent from "@/components/MainComponent";
import { useEffect } from "react";
import { sign } from "@/lib/sign";

export default function Home() {
  useEffect(() => {
    sign();
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