"use client"
import { getFullName } from '@/lib/User'
import React, { useEffect } from 'react'

const Page = () => {
    useEffect(() => {
        getFullName().then(res => console.log(res));
    })

    return (
        <div>page</div>
    )
}

export default Page