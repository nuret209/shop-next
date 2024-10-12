import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";

const Ad = () => {
    return (
        <div className='bg-white rounded-2xl [box-shadow:0px_1px_2px_rgba(228,_229,_231,_0.24)] px-5 py-4 border border-[#E2E4E9] text-[#525866] sm:w-[392px] h-[178px] flex flex-col justify-between'>
            <span className="border border-[#e3e4e8] rounded-full w-[40px] h-[40px] text flex items-center justify-center [box-shadow:0px_1px_2px_rgba(228,_229,_231,_0.24)] ">
                <FaRegCopyright size={24} />
            </span>
            <div>
                <h4 className='mb-1'>Reklam Yönetimi</h4>
                <h3 className='text-2xl text-[#0A0D14] font-medium'>Yakında</h3>
            </div>
        </div>
    )
}

export default Ad