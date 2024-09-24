import React from 'react'
import Image from 'next/image'
const TopBanner = () => {
    return (
        <div className="top-banner max-[600px]:text-[9px] flex justify-center h-[54px] items-center relative text-white bg-topBannerBG">
            <span className="firstText text-transparent bg-[linear-gradient(89.73deg,_#FFFFFF_0%,_#D7DBFF_1.33%,_#EDFFAC_76.53%)] bg-clip-text">
                ⚡ İşletminizi wagmigg ' ye taşıyın!

            </span>
            <span className="dot relative max-[600px]:mx-1 mr-3 ml-3 bg-white block h-1 w-1 rounded-full">


            </span>
            <span className="secondText mr-3 text-transparent bg-[linear-gradient(89.56deg,_#D0FC59_0%,_#F5FEE0_50.91%,_#FAEDFE_100%)] bg-clip-text">
                0536 014 28 18 ya da
            </span>
            <div className="callMeButton flex justify-center items-center max-[600px]:py-1 max-[600px]:px-[6px]    px-3 py-2 cursor-pointer rounded-full border border-white">
                <Image className="max-[600px]:mr-1 mr-3" src="/images/callLogo.svg" alt='callme' width={20} height={20} />
                Sizi Arayalım
            </div>


        </div>
    )
}

export default TopBanner