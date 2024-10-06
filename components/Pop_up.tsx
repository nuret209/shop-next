import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs';
import React from 'react'
interface Pop_upProps {
    active: boolean,
    fullName: string;
}
const Pop_up = ({ active, fullName }: Pop_upProps) => {
    return (
        <div className={`pop_up transition-all duration-200 absolute top-[60px] right-[-2px] z-50 bg-white w-[300px] rounded-[10px] [box-shadow:rgba(0,_0,_0,_0.16)_0px_10px_36px_0px,_rgba(0,_0,_0,_0.06)_0px_0px_0px_1px] ${!active && "opacity-0 pointer-events-none"}`}>
            <div className="flex justify-center">
                <div className="mx-4 my-3 font-medium text-textColor cursor-pointer">{fullName ? "Lütfen Giriş Yapın" : fullName}</div>
            </div>
            <div className="firstSection relative mt-4 mb-8 after:content-[''] after:w-full after:h-px after:bg-[#e2e5e8] after:absolute after:bottom-[-16px] after:left-0">
                {["Bildirimler", "Seyahatler", "Favoriler"].map((value, index) => <div className="mx-4 my-6 font-medium text-textColor cursor-pointer" key={index}>{value}</div>)}
            </div>
            <div className="secondSection relative mb-8 after:content-[''] after:w-full after:h-px after:bg-[#e2e5e8] after:absolute after:bottom-[-16px] after:left-0 text-textColor">
                {["Section1", "Section2", "Section3"].map((value, index) => <div key={index} className='cursor-pointer mx-4 my-6'>{value}</div>)}
            </div>
            <div className="lastSection mb-4 text-textColor">
                <SignedOut>{[{ "name": "Login", "href": "/sign-in" }, { "name": "Sign Up", "href": "/sign-up" }].map((value, index) => <a href={value.href} key={index} className='block cursor-pointer mx-4 my-6'>{value.name}</a>)}</SignedOut>
                <SignedIn><SignOutButton><button onClick={() => setTimeout(() => window.location.reload(), 500)} className='block cursor-pointer mx-4 my-6'>Çıkış Yap</button></SignOutButton></SignedIn>
            </div>
        </div>
    )
}

export default Pop_up