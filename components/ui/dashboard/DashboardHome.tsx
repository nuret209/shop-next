import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";

const DashboardFeatures = [
    "Eksta ücret yok",
    "Gizlilik öncekli",
    "Öncelikli local veri",
    "Takip yok",
    "Reklam yok",
    "Veri toplama yok"
]
const DashboardHome = () => {
    return (
        <div className='m-12'>
            <div className=''>
                <Image src="/images/DasboardLogo.svg" alt="Dashboard" width={48} height={48} />
            </div>
            <div className='flex flex-col w-[195px] mt-[17px]'>
                <span className='mb-[17px]'>wagmigg’e hoş geldiniz</span>
                <span className='text-[#71717A]'>İşletmenizi büyütmeye hazır mısınız?</span>
            </div>
            <div className='flex flex-col font-normal gap-y-2 mt-[18px]'>
                {DashboardFeatures.map((feature, i) =>
                    <div key={i} className='flex items-center gap-1'>
                        <Image src={`/images/dashboardHomeIcons/icon${i + 1}.svg`} width={20} height={20} alt='dahboard home icon' />
                        {feature}
                    </div>
                )}
            </div>
            <button className='hover:underline mt-[37px] bg-[#0A0D14] flex p-[10px] items-center gap-x-2 text-white [box-shadow:0px_1px_2px_0px_rgba(94,_251,_55,_0.08)] rounded-[10px]'>
                Başlayın
                <FaArrowRight />
            </button>
        </div>

    )
}

export default DashboardHome