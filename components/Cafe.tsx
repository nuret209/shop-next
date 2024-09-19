import React from 'react';
import Image from 'next/image'
import imgData from "./cafe.jpg"
interface CafeProps {
    favorite: boolean;
    title: string;
    distance: string;
    date: string;
    price: string;
    rates: string;
}

export default function Cafe({favorite, title, distance, date, price, rates } : CafeProps) {
    const [heartActive, setheartActive] = React.useState(false);
    return (<>
        <div className="cafe sm:mr-[20px] mb-[40px] max-w-[270px] relative text-[15px] text-[#717171]">
            {favorite && <span className="fav absolute bg-[#fff] text-[#000] font-medium w-[126px] h-[28px] flex items-center justify-center rounded-[40px] top-[12px] left-[12px] border-[1px] border-[solid] border-[#fff] bg-[linear-gradient(45deg,_#f1f1f1_0%,_#fff_11%,_#fff_70%,_#efefef_94%)] [box-shadow:0px_4px_10px_rgba(0,_0,_0,_0.16)]">Guests Favorite</span>}
            <Image priority={true} className="rounded-[12px] mb-[12px]" alt="house" src={imgData} />
            <div className={`heart h-[18px] w-[18px] text-[23px] absolute right-[16px] bg-transparent top-[16px] cursor-pointer ${!heartActive && "opacity-50"}`}  onClick={() => setheartActive(!heartActive)}><svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6152 19C16.8652 15.4525 22.1152 11.5 22.1152 6.25003C22.1172 5.56004 21.9828 4.87646 21.7196 4.2386C21.4565 3.60075 21.0699 3.02121 20.582 2.53331C20.0941 2.0454 19.5145 1.65877 18.8767 1.39563C18.2388 1.1325 17.5552 0.998052 16.8652 1.00003C15.5152 1.00003 14.1802 1.51003 13.1527 2.53753L11.6152 4.07503L10.0777 2.53753C9.59123 2.04817 9.01278 1.65983 8.37565 1.39483C7.73852 1.12983 7.05528 0.993408 6.36524 0.993408C5.6752 0.993408 4.99196 1.12983 4.35483 1.39483C3.7177 1.65983 3.13925 2.04817 2.65274 2.53753C2.16458 3.02458 1.77745 3.60328 1.5136 4.24039C1.24975 4.87749 1.11437 5.56045 1.11524 6.25003C1.11524 11.5 6.36524 15.4525 11.6152 19Z" fill="black" stroke="white" strokeWidth="1.5" />
            </svg>
            </div>
            <div className="rates absolute right-0 text-[15px] flex items-center justify-center text-[#000]">
                <svg className='mr-[3px] text-[12px]' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.6284 0.37272L4.06895 3.70272L0.345901 4.17897C0.273874 4.18791 0.205967 4.21728 0.150314 4.26356C0.0946606 4.30984 0.0536191 4.37108 0.0321041 4.43993C0.0105891 4.50878 0.00951262 4.58233 0.0290035 4.65177C0.0484944 4.72121 0.0877265 4.7836 0.142002 4.83147L2.89842 7.29522L2.15456 10.989C2.14055 11.0596 2.1473 11.1327 2.17401 11.1996C2.20071 11.2666 2.24625 11.3244 2.30517 11.3663C2.36409 11.4082 2.43392 11.4324 2.5063 11.436C2.57869 11.4396 2.65058 11.4224 2.7134 11.3865L5.96824 9.51147L9.22685 11.3865C9.28966 11.4224 9.36156 11.4396 9.43395 11.436C9.50633 11.4324 9.57616 11.4082 9.63508 11.3663C9.694 11.3244 9.73954 11.2666 9.76624 11.1996C9.79295 11.1327 9.7997 11.0596 9.78569 10.989L9.04183 7.29522L11.7982 4.83147C11.8514 4.78315 11.8896 4.72072 11.9082 4.65156C11.9268 4.58239 11.9251 4.50939 11.9032 4.44116C11.8814 4.37294 11.8403 4.31235 11.7849 4.26655C11.7295 4.22076 11.6621 4.19167 11.5906 4.18272L7.86752 3.70272L6.31184 0.37272C6.28181 0.30725 6.23344 0.251742 6.17252 0.212818C6.11159 0.173894 6.04068 0.153198 5.96824 0.153198C5.89579 0.153198 5.82488 0.173894 5.76395 0.212818C5.70303 0.251742 5.65466 0.30725 5.62463 0.37272H5.6284Z" fill="#222222" />
            </svg>
                {rates}</div>
            <div className="title font-medium text-[#222] mb-[5px]">{title}  </div>
            <span>{distance}</span><br />
            <span>{date}</span>
            <div className="price text-[#222] font-medium mt-[13px]">₹{price} <span className='font-normal'>night</span></div>
        </div>
    </>)
}