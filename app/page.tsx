'use client'
import Cafes from "@/data/Cafes.json"

import { useState } from "react";
import Image from "next/image";
import TopBanner from "@/components/TopBanner"
import Cafe from "@/components/Cafe";
import TopComponent from "@/components/TopComponent";
import { Tab, TabGroup } from '@headlessui/react'

export default function Home() {
  const [activetab, setactivetab] = useState(1);
  return (
    <>
      <main>
        <TopBanner />
        <TopComponent />
        <div className="main-page sm:flex sm:flex-row sm:justify-between flex flex-col items-center sm:items-start sm:mx-[80px]">
          <div className="cards w-full">
            <TabGroup className="tabs  sm:mr-5  flex rounded-[100px] bg-[#f6f8fa] p-[4px] mb-[16px]" onChange={(index) => setactivetab(index + 1)}    >
              <Tab className={`transition-all text-[10px] outline-none	 whitespace-nowrap flex-col sm:flex-row cursor-pointer sm:items-center justify-center duration-200 p-[12px] w-1/4 flex sm:text-[14px] items-center justify-center text-[#868c98] rounded-[100px] no-underline stroke-[#868c98] ${1 == activetab && "text-[#0a0d14] px-[16px] py-[12px] bg-[#fff] [box-shadow:0px_6px_10px_rgba(27,_28,_29,_0.06),_0px_2px_4px_rgba(27,_28,_29,_0.02)]"}`}>
                <Image className="mr-[8px] max-h-[20px] max-w-[20px]" src="/images/tabIcon1.svg" alt="Site Logo" width={20} height={20} />
                <span className="whitespace-nowrap  items-center">Internet Cafe</span>
              </Tab>
              <Tab className={`transition-all text-[10px] outline-none	 whitespace-nowrap flex-col sm:flex-row cursor-pointer duration-200 p-[12px] w-1/4 flex sm:text-[14px] items-center justify-center text-[#868c98] rounded-[100px] no-underline stroke-[#868c98] ${2 == activetab && "text-[#0a0d14] px-[16px] py-[12px] bg-[#fff] [box-shadow:0px_6px_10px_rgba(27,_28,_29,_0.06),_0px_2px_4px_rgba(27,_28,_29,_0.02)]"}`}>
                <Image className="mr-[8px] max-h-[20px] max-w-[20px]" src="/images/tabIcon2.svg" alt="Site Logo" width={20} height={20} />

                <span className="whitespace-nowrap  items-center">Playstation Cafe</span>
              </Tab>
              <Tab className={`transition-all text-[10px] outline-none	 whitespace-nowrap flex-col sm:flex-row cursor-pointer duration-200 p-[12px] w-1/4 flex sm:text-[14px] items-center justify-center text-[#868c98] rounded-[100px] no-underline stroke-[#868c98] ${3 == activetab && "text-[#0a0d14] px-[16px] py-[12px] bg-[#fff] [box-shadow:0px_6px_10px_rgba(27,_28,_29,_0.06),_0px_2px_4px_rgba(27,_28,_29,_0.02)]"}`}>
                <Image className="mr-[8px] max-h-[20px] max-w-[20px]" src="/images/tabIcon3.svg" alt="Site Logo" width={20} height={20} />

                <span className="whitespace-nowrap  items-center">Simulasyon Cafe</span>
              </Tab>
              <Tab className={`transition-all text-[10px] outline-none	 whitespace-nowrap flex-col sm:flex-row cursor-pointer duration-200 p-[12px] w-1/4 flex sm:text-[14px] items-center justify-center text-[#868c98] rounded-[100px] no-underline stroke-[#868c98] ${4 == activetab && "text-[#0a0d14] px-[16px] py-[12px] bg-[#fff] [box-shadow:0px_6px_10px_rgba(27,_28,_29,_0.06),_0px_2px_4px_rgba(27,_28,_29,_0.02)]"}`}>
                <Image className="mr-[8px] stroke-black max-h-[20px] max-w-[20px]" src="/images/tabIcon4.svg" alt="Site Logo" width={20} height={20} />
                <span className="whitespace-nowrap  items-center">VR Cafe</span>
              </Tab>
            </TabGroup>
            <div className="cafes flex flex-wrap justify-center sm:justify-normal max-w-full">
              {Cafes.map((cafe, index: number) => (cafe.type == activetab &&
                <Cafe key={index}
                  favorite={cafe.favorite}
                  title={cafe.location}
                  date={cafe.date}
                  rates={cafe.rates}
                  price={cafe.price}
                  distance={cafe.distance}
                />
              ))}
            </div>
          </div>
          <div className="map rounded-xl w-[300px] h-[400px] sm:min-h-[900px] sm:max-h-[1000px] sm:min-w-[calc(50%)] bg-[#000]"></div>
        </div>
      </main>
    </>
  );
}