import React from 'react'
import { RiPhoneFill } from 'react-icons/ri'
import { GoDotFill } from "react-icons/go";

const TopBanner = () => {
    return (
        <div className="top-banner max-[600px]:text-[9px] flex justify-center h-[54px] items-center relative text-white bg-topBannerBG">
            <span className="firstText text-transparent bg-[linear-gradient(89.73deg,_#FFFFFF_0%,_#D7DBFF_1.33%,_#EDFFAC_76.53%)] bg-clip-text">
                ⚡ İşletminizi wagmigg ' ye taşıyın!

            </span>
            <GoDotFill className='text-white size-2 relative max-[600px]:mx-1 mr-3 ml-3'/>
            <span className="secondText mr-3 text-transparent bg-[linear-gradient(89.56deg,_#D0FC59_0%,_#F5FEE0_50.91%,_#FAEDFE_100%)] bg-clip-text">
                0536 014 28 18 ya da
            </span>
            <div className="callMeButton flex justify-center items-center max-[600px]:py-1 max-[600px]:px-[6px]    px-3 py-2 cursor-pointer rounded-full border border-white">
                <RiPhoneFill className="max-[600px]:mr-1 mr-2" size={20}/>               
                Sizi Arayalım
            </div>


        </div>
    )
}

export default TopBanner