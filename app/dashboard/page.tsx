"use client"
import { getFullName } from '@/lib/User'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Page = () => {
    const router = useRouter();
    useEffect(() => {
        getFullName().then(res => {
            console.log(res);
            if (res == "undefined" || res == "null") {
                console.log("hesap yok");

                router.push("/dashboard/register")
            }
        }
        );
    })

    return (
        <div></div>
    )
}

export default Page