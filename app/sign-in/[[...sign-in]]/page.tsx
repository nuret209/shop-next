import Login_Signup from '@/components/Login_Signup';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "wagmigg - sign-in",
    description: "The page of wagmigg sign-in",
  };
const Page = () => {
  return (
    <>
      <Login_Signup path='./sign-up' pathName='Kayıt Ol' />
    </>
  );
}

export default Page