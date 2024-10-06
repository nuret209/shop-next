import Login_Signup from '@/components/Login_Signup';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "wagmigg - shop",
  description: "The page of wagmigg sign-up",
};
const Page = () => {
  return (
    <>
      <Login_Signup path='./sign-in' pathName='Giriş Yap' />
    </>
  );
}

export default Page