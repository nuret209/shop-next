"use client"
import MainArea from "@/components/ui/dashboard/MainArea"
import TopComponent from "@/components/ui/dashboard/TopComponent"
import { DasboardContext } from "@/components/ui/dashboard/context"
import { useState } from "react"
import { Poppins } from 'next/font/google'
const popp = Poppins({
  weight:['400',"500"],
  subsets: ["latin"] })
const Page = () => {
  const [timeId, setTimeId] = useState(0);
  const [page, setPage] = useState(0);

  return (
  <div className={popp.className}>
    <DasboardContext.Provider value={{ timeId, setTimeId , page, setPage}}>

      <TopComponent />
      <MainArea />

    </DasboardContext.Provider>
  </div>
  )
}

export default Page