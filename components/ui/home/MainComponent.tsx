import Cafes from "@/data/Cafes.json"
import Image from "next/image";
import Cafe from "@/components/ui/home/Cafe";
import { Tab, TabGroup } from '@headlessui/react'
import { useState } from "react";

const CafeCategories = [
    "Internet Cafe",
    "Playstation Cafe",
    "Simulasyon Cafe",
    "VR Cafe"
]

const MainComponent = () => {
    const [activetab, setactivetab] = useState(1);

    return (
        <>
            <div className="main-page sm:flex sm:flex-row sm:justify-between flex flex-col items-center sm:items-start sm:mx-[80px]">
                <div className="cards w-full">
                    <TabGroup className="tabs  sm:mr-5  flex rounded-[100px] bg-[#f6f8fa] p-[4px] mb-[16px]" onChange={(index) => setactivetab(index + 1)}    >
                        {CafeCategories.map((category, index) => (
                            <Tab key={index} className={`transition-all text-[10px] outline-none whitespace-nowrap flex-col sm:flex-row cursor-pointer sm:items-center justify-center duration-200 p-[12px] w-1/4 flex sm:text-[14px] items-center text-[#868c98] rounded-[100px] no-underline stroke-[#868c98] ${index + 1 == activetab && "text-[#0a0d14] px-[16px] py-[12px] bg-[#fff] [box-shadow:0px_6px_10px_rgba(27,_28,_29,_0.06),_0px_2px_4px_rgba(27,_28,_29,_0.02)]"}`}>
                                <Image className="mr-[8px] max-h-[20px] max-w-[20px]" src={`/images/tabIcon${index + 1}.svg`} alt="Site Logo" width={20} height={20} />
                                <span className="whitespace-nowrap  items-center">{category}</span>
                            </Tab>
                        )
                        )}
                    </TabGroup>
                    <div className="cafes 
                    grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-x-[18px]  gap-y-[40px] sm:pl-0  px-[18px] max-w-full">
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
        </>
    )
}

export default MainComponent