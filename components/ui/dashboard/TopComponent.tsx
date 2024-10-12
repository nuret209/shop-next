"use client"
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { Tab, TabGroup, TabList, } from '@headlessui/react'
import { DasboardContext, useContext } from "./context";
const timeSelect = ["Bügün", "Dün", "Bu Hafta", "Bu Ay", "Bu Yıl"];
const TopComponent = () => {
  const { timeId , setTimeId } = useContext(DasboardContext);
  return (
    <div className="py-5 px-[109px] flex after:content-[''] relative after:absolute after:h-[1px] after:w-full after:bg-[#e3e4e8] after:bottom-0 after:right-0">
      <div className="flex border border-[#E2E4E9] w-[106px] rounded-lg text-[#525866] h-9 px-[7px] box-border items-center">
        <TbWorld className="min-h-5 min-w-5" />
        <select className="outline-none bg-transparent w-[70px] appearance-none text-center text-[14px]" >
          <option value="all">Hepsi</option>
          <option value="city:1">İstanbul</option>
          <option value="city:2">Kars</option>
          <option value="city:3">Bursa</option>
        </select>
        <IoIosArrowDown />
      </div>
      <TabGroup onChange={(index) => setTimeId(index)}>
        <TabList className="flex ml-3 h-9 items-center rounded-lg text-[#525866] ">
          {timeSelect.map((l, i) => <Tab key={i} className={`text-[14px] transition-all duration-300 border border-[#E2E4E9] px-4 relative flex items-center outline-none py-2 h-9 whitespace-nowrap
           first:rounded-tl-lg  first:rounded-bl-lg
          last:rounded-br-lg last:rounded-tr-lg last:border-r-[1px] border-r-0 ${timeId == i && "text-[#0A0D14] bg-[#f6f8fa] "}`}>{l}</Tab>)}
        </TabList>
      </TabGroup>
    </div>
  )
}

export default TopComponent