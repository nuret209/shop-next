"use client"
import DashboardHome from '@/components/ui/dashboard/DashboardHome'
import { getFullName } from '@/lib/User'
//import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Page = () => {
  //  const router = useRouter();
    useEffect(() => {
        getFullName().then(res => {
            console.log(res);
            /*   if (res == "undefined" || res == "null") {
                   console.log("hesap yok");
                   router.push("/dashboard/register")
               }*/
        }
        );
    })

    return (
        <div className='font-medium sm:flex sm:justify-center sm:items-center h-full '>
            <DashboardHome />
        </div>
    )
}

export default Page