import React from 'react'
import type { Metadata } from "next";
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: "400" })
export const metadata: Metadata = {
  title: "wagmigg - shop",
  description: "The page of wagmigg login",
};
const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={poppins.className}>
      {children}
    </div>
  )
}

export default layout