import React from 'react';
import Image from 'next/image'
import imgData from "@/public/images/cafe.jpg"

import { RiStarSFill } from "react-icons/ri";

interface CafeProps {
    favorite: boolean;
    title: string;
    distance: string;
    date: string;
    price: string;
    rates: string;
}

export default function Cafe({ favorite, title, distance, date, price, rates }: CafeProps) {
    const [heartActive, setheartActive] = React.useState(false);
    return (<>
        <div className="cafe  relative text-[15px]  text-[#717171]">
            {favorite && <span className="fav absolute bg-[#fff] text-[#000] font-medium w-[126px] h-[28px] flex items-center justify-center rounded-[40px] top-[12px] left-[12px] border-[1px] border-[solid] border-[#fff] bg-[linear-gradient(45deg,_#f1f1f1_0%,_#fff_11%,_#fff_70%,_#efefef_94%)] [box-shadow:0px_4px_10px_rgba(0,_0,_0,_0.16)]">Guests Favorite</span>}
            <Image priority={true} className="rounded-[12px] mb-[12px]" alt="house" src={imgData} />
            <div className={`heart h-[20px] w-[23px] text-[23px] absolute right-[16px] bg-transparent top-[16px] cursor-pointer ${!heartActive && "opacity-50"}`} onClick={() => setheartActive(!heartActive)}>
                <Image src="/images/heart.svg" alt="Site Logo" width={23} height={20} />

            </div>
            <div className="rates absolute right-0 text-[15px] flex items-center justify-center text-[#000]">
                <RiStarSFill className='mr-[3px] text-[12px] size-4' />

                {rates}</div>
            <div className="title font-medium text-[#222] mb-[5px]">{title}  </div>
            <span>{distance}</span><br />
            <span>{date}</span>
            <div className="price text-[#222] font-medium mt-[13px]">₹{price} <span className='font-normal'>night</span></div>
        </div>
    </>)
}