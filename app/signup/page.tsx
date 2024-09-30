import { Metadata } from "next";
import EndBanner from "@/components/EndBanner";
import Login_Signup from "@/components/Login_Signup";

export const metadata: Metadata = {
  title: "wagmigg - signup",
  description: "The page of wagmigg login",
};
export default function signUp() {
  return (
    <>
      <EndBanner />
      <Login_Signup path="/login" pathName="Giriş Yap"/>
    </>
  )
}