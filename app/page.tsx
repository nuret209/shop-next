'use client'

import TopBanner from "@/components/ui/home/TopBanner"
import TopComponent from "@/components/ui/home/TopComponent";
import MainComponent from "@/components/ui/home/MainComponent";
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