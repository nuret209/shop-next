"use client"
import MainArea from "@/components/ui/dashboard/MainArea"
import TopComponent from "@/components/ui/dashboard/TopComponent"
import { DasboardContext } from "@/components/ui/dashboard/context"
import { useEffect, useState } from "react"
import { Poppins } from 'next/font/google'
import { getUserName } from "@/lib/User"
//import { useRouter } from "next/navigation"
interface DashboardProps {
  params: {
    username: string
  }
}
const popp = Poppins({
  weight: ['400', "500"],
  subsets: ["latin"]
})
const Page = ({ params }: DashboardProps) => {
  const [timeId, setTimeId] = useState(0);
  const [page, setPage] = useState(0);
  //const router = useRouter();
  useEffect(() => {
    getUserName().then(username => {
   //   if (username == "undefined" || params.username == "undefined" || username !== params.username) router.push("/dashboard/register")
console.log(username);

    });
  })
  return (
    <div className={`bg-[#f6f8fa] h-[100%] ${popp.className}`}>
      <DasboardContext.Provider value={{ timeId, setTimeId, page, setPage, username: params.username }}>

        <TopComponent />
        <MainArea />

      </DasboardContext.Provider>
    </div>
  )
}

export default Page