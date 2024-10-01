import Login_Signup from "@/components/Login_Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "wagmigg - shop",
  description: "The page of wagmigg login",
};
export default function Login() {
  return (
    <>  
      <Login_Signup path="/signup" pathName="Kayıt Ol"/>
    </>
  )
}