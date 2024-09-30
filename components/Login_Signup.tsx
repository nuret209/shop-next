import React from 'react'
import LoginLogo from './LoginLogo'
import { FaGoogle, FaArrowRight, } from "react-icons/fa";


interface Login_SignupProps {
    path: string;
    pathName: string;
}

const Login_Signup = ({ path, pathName }: Login_SignupProps) => {
    return (
        <div className="login w-full h-full flex absolute items-center justify-center">
            <div className="loginArea flex flex-col items-center">
                <div className="logo flex justify-center">
                    <LoginLogo />
                </div>
                <span className="find w-[350px] sm:w-[392px] text-center mb-[24px] font-['Satoshi',_sans-serif] font-extrabold text-[44px] bg-[linear-gradient(180deg,_#000_0%,_#151515_89.17%)] bg-clip-text">
                    en ya<span className="text-[34.4px] font-bold">K</span>ı<span className="text-[34.4px] font-bold">N</span> oyu<span className="text-[34.4px] font-bold">N</span> mer<span className="text-[34.4px] font-bold">K</span>ezini bul.
                </span>
                <button className="loginButton flex items-center justify-center box-border cursor-pointer gap-[4px] [box-shadow:0px_1px_2px_rgba(27,_28,_29,_0.48),_0px_0px_0px_1px_#242628] rounded-[10px] h-10 w-[200px] sm:w-[392px] outline-[0] border-[0px] bg-[#0a0d14] text-[white]">
                    <FaGoogle />
                    Google ile giriş yap
                </button>
                <span className="toSignUp mt-[24px] flex justify-center  text-[#525866]">
                    Hesabınız yok mu?
                    <a className="text-[#0a0d14] flex gap-1 items-center ml-[4px] hover:underline" href={path}>
                        {pathName}
                        <FaArrowRight className='mt-[-2px]' />
                    </a>
                </span>
            </div>
        </div>
    )
}

export default Login_Signup