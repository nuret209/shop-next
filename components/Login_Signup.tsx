"use client"
import React from 'react'
import LoginLogo from './LoginLogo'
import { FaGoogle } from "react-icons/fa";
import { TbWorld } from 'react-icons/tb';
import { IoIosArrowDown, IoMdArrowForward } from 'react-icons/io';
import { useSignIn } from '@clerk/nextjs';

interface Login_SignupProps {
    path: string;
    pathName: string;
}

const Login_Signup = ({ path, pathName }: Login_SignupProps) => {
    const { signIn } = useSignIn();
    const handleGoogleSignUp = async () => {
        console.log("hello");

        try {
            if (signIn !== undefined) {
                await signIn.authenticateWithRedirect({
                    strategy: 'oauth_google',
                    redirectUrl: '/',  // The URL to redirect after sign-up
                    redirectUrlComplete: '/',    // After completion
                });
            }
        } catch (err) {
            console.error('Google sign-up failed', err);
        }
    };
    return (
        <div className="h-dvh w-full flex flex-col justify-between">
            <div className='w-full' />
            <div className='w-full min-h-60 flex flex-col items-center justify-center'>
                <LoginLogo />
                <span className="text-center mb-6 font-sans font-extrabold text-[44px] bg-gradient-to-b from-black to-[#151515] bg-clip-text text-transparent">
                    en ya<span className="text-[34.4px] font-bold">K</span>ı<span className="text-[34.4px] font-bold">N</span> oyu<span className="text-[34.4px] font-bold">N</span> <br /> mer<span className="text-[34.4px] font-bold">K</span>ezini bul.
                </span>
                {/* Google Sign-In Button */}
                <button onClick={handleGoogleSignUp} className="flex items-center justify-center gap-1 shadow-md rounded-lg h-[40px] w-[200px] sm:w-[392px] bg-[#0a0d14] text-white">
                    <FaGoogle />
                    Google ile giriş yap
                </button>

                {/* Sign-up Link */}
                <span className="mt-6 sm:w-[392px] flex justify-center text-[#525866]">
                    Hesabınız yok mu?
                    <a className="text-[#0a0d14] flex items-center ml-1 hover:underline gap-[2px]" href={path}>
                        {pathName}
                        <IoMdArrowForward />
                    </a>
                </span>
            </div>

            {/* Footer Section */}
            <div className='w-full flex justify-between p-5 text-base pointer-events-none select-none'>
                <div className="copyright text-[#525866]">© 2024 wagmigg Teknoloji A.Ş.</div>
                <div className="lang flex items-center text-[#525866]">
                    <TbWorld />
                    <span className="ml-1 flex items-center ">
                        TR <IoIosArrowDown />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login_Signup