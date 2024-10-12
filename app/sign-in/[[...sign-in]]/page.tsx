import Login_Signup from '@/components/ui/login_register/Login_Signup';
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