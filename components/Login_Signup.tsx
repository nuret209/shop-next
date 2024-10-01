import React from 'react'
import LoginLogo from './LoginLogo'
import { FaGoogle } from "react-icons/fa";
import { TbWorld } from 'react-icons/tb';
import { IoIosArrowDown } from 'react-icons/io';

interface Login_SignupProps {
    path: string;
    pathName: string;
}

const Login_Signup = ({ path, pathName }: Login_SignupProps) => {
    return (
        <div className="h-dvh w-full flex flex-col justify-between">
            <div className='w-full' />
            <div className='w-full min-h-60 flex flex-col items-center justify-center'>
                <LoginLogo />
                <span className="text-center mb-6 font-sans font-extrabold text-[44px] bg-gradient-to-b from-black to-[#151515] bg-clip-text text-transparent">
                    en ya<span className="text-[34.4px] font-bold">K</span>ı<span className="text-[34.4px] font-bold">N</span> oyu<span className="text-[34.4px] font-bold">N</span> <br /> mer<span className="text-[34.4px] font-bold">K</span>ezini bul.
                </span>
                {/* Google Sign-In Button */}
                <button className="flex items-center justify-center gap-1 shadow-md rounded-lg h-[40px] w-[200px] sm:w-[392px] bg-[#0a0d14] text-white">
                    <FaGoogle />
                    Google ile giriş yap
                </button>

                {/* Sign-up Link */}
                <span className="mt-6 sm:w-[392px] flex justify-center text-[#525866]">
                    Hesabınız yok mu?
                    <a className="text-[#0a0d14] flex items-center ml-1 hover:underline" href={path}>
                        {pathName}
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.129 5.25L5.106 1.227L6.1665 0.166504L12 6L6.1665 11.8335L5.106 10.773L9.129 6.75H0V5.25H9.129Z" fill="#0A0D14" />
                        </svg>
                    </a>
                </span>
            </div>

            {/* Footer Section */}
            <div className='w-full flex justify-between p-5'>
                <div className="copyright">© 2024 wagmigg Teknoloji A.Ş.</div>
                <div className="lang flex items-center">
                    <TbWorld />
                    <span className="ml-1 flex items-center">
                        TR <IoIosArrowDown />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login_Signup