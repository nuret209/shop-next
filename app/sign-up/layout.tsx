import React from 'react'
import type { Metadata } from "next";

import { Poppins } from 'next/font/google'
export const metadata: Metadata = {
  title: "wagmigg - login",
  description: "The page of wagmigg sign-up",
};
const poppins = Poppins({ subsets: ['latin'], weight: "400" })

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={poppins.className}>
      {children}
    </div>
  )
}

export default layout