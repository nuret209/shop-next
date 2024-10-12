import React from 'react'
import { DasboardContext, useContext } from './context'
import { IoMoonOutline } from "react-icons/io5";

import { RiRocket2Line } from "react-icons/ri";
const TimeTexts = [
    "Bügüne Göre",
    "Düne Göre",
    "Geçen haftaya göre",
    "Geçen Aya Göre",
    "Geçen Yıla göre"
]
const Views = () => {
    const { timeId } = useContext(DasboardContext);
    return (
        <div className='bg-white px-5 py-4 border border-[#E2E4E9] [box-shadow:0px_1px_2px_rgba(228,_229,_231,_0.24)] rounded-2xl md:w-[1224px]  '>
            <div className="text-[#525866] relative flex justify-between after:absolute after:h-px after:w-[calc(100%-40px)] after:bg-[#e3e4e8] after:bottom-[-24px] after:right-[20px]">
                <div className='flex items-center gap-2 '>
                    <RiRocket2Line size={24} />
                    <h3 className='text-[#0A0D14] text-base font-medium'>Genel Özet</h3>
                </div>
                <span className='bg-[#F6F8FA] w-36 py-[6px] rounded-lg text-center text-sm'>
                    {TimeTexts[timeId]}
                </span>
            </div>
            <div className="flex justify-between mt-12">
                <div className='flex p-4 relative gap-3 items-center w-full text-[#525866] 
                after:absolute after:h-[calc(100%-20px)] after:w-px after:bg-[#e3e4e8] after:bottom-[10px] after:right-[24px]'>
                    <div className="p-3 bg-[#f6f8fa] rounded-full"><IoMoonOutline size={24} /></div>
                    <div className='flex flex-col'>
                        <span className='text-[#0A0D14] font-medium'>Toplam Sayfa Ziyaretçim</span>
                        <span>180</span>
                    </div>
                </div>
                <div className='flex p-4 gap-3 relative items-center w-full text-[#525866]  after:absolute after:h-[calc(100%-20px)] after:w-px after:bg-[#e3e4e8] after:bottom-[10px] after:right-[24px]'>
                    <div className="p-3 bg-[#f6f8fa] rounded-full"><IoMoonOutline size={24} /></div>
                    <div className='flex flex-col'>
                        <span className='text-[#0A0D14] font-medium'>Toplam Sayfa Ziyaretçim</span>
                        <span>180</span>
                    </div>
                </div>
                <div className='flex p-4 gap-3 items-center w-full text-[#525866]'>
                    <div className="p-3 bg-[
Toplam Sayfa Ziyaretçim
180f8fa] rounded-full"><IoMoonOutline size={24} /></div>

                    <div className='flex flex-col'>
                        <span className='text-[#0A0D14] font-medium'>Toplam Sayfa Ziyaretçim</span>
                        <span>180</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Views