"use client"
import MainArea from "@/components/ui/dashboard/MainArea"
import TopComponent from "@/components/ui/dashboard/TopComponent"
import { DasboardContext } from "@/components/ui/dashboard/context"
import { useState } from "react"
const Page = () => {
  const [timeId, setTimeId] = useState(0);
  return (
    <DasboardContext.Provider value={{ timeId, setTimeId }}>
      <TopComponent />
      <MainArea />
    </DasboardContext.Provider>
  )
}

export default Page