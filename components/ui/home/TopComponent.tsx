//
import iller from "@/data/iller.json"
import ilceler from "@/data/ilceler.json"
//
import Pop_up from "@/components/ui/home/Pop_up"
import React, { useEffect } from "react"
import Image from "next/image"
import { getFullName, getProfileImage } from "../../../lib/User"
import { TfiMenu } from "react-icons/tfi";
import { RiSearchLine } from "react-icons/ri";





const TopComponent = () => {
  const [city, setCity] = React.useState(0);
  const [pop_upActive, setPop_upActive] = React.useState(false);
  const [profileImage, setProfileImage] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  useEffect(() => {
    getProfileImage().then(res => setProfileImage(res ? res : ""));
    getFullName().then(res => setFullName(res));

  }, [])
  return (
    <div className="topComponent justify-between flex px-[80px] max-[600px]:px-0 py-[20px] items-center relative mb-[12px] after:content-[''] after:w-full after:h-px after:bg-[#e2e5e8] after:absolute after:bottom-0 after:left-0">
      <div className="logo">
        <Image src="/images/siteLogo.svg" alt="Site Logo" width={40} height={41} />
      </div>
      <div className="search relative border-[1px] border-[solid] border-[#e5e7eb] flex sm:pl-[24px] py-2 pl-2 rounded-[100px] items-center  before:top-[6px]  sm:before:top-[14px] before:left-[95px] sm:before:left-[122px] before:content-[''] before:absolute before:bg-[#e5e7eb] before:h-[24px] before:w-px">
        <select className="text-sm w-[89px]  sm:mr-[20px]  mr-2 cursor-pointer font-medium s sm:my-[8px] appearance-none outline-0 bg-transparent border-[0PX] max-[600px]:m-0" onChange={(e) => setCity(+e.target.value)} name="il" id="il">
          <option value="">İl</option>
          {iller.map(il => <option key={il.id} value={il.id}>{il.name}</option>)}
        </select>
        <select className="text-sm w-[89px] cursor-pointer font-medium sm:my-[8px] my-1  appearance-none outline-0 bg-transparent border-[0PX] max-[600px]:m-0" name="ilce" id="ilce">
          <option value="">İlçe</option>
          {ilceler.map(ilce => (city == +ilce.il_id && <option key={ilce.id} value={ilce.id}>{ilce.name}</option>))}
        </select>
        <div className="searchIcon text-[white] sm:h-[32px] h-[22px] w-[22px] sm:w-[32px] mr-[4px] sm:mr-[6px] bg-[#0a0d14] rounded-[100px] flex items-center justify-center ml-2 sm:ml-[16px]" >
        <RiSearchLine size={16} />


        </div>
      </div>
      <div className="userPanel relative">
        <div onClick={() => setPop_upActive(!pop_upActive)} className="icons w-[86px] h-[44px] flex cursor-pointer rounded-[100px] border-[1px] border-[solid] border-[#ddd] items-center justify-center relative">
     <TfiMenu className="mr-2" size={16} />
        {profileImage ?
            <Image src={profileImage} width={32} height={32} className="rounded-full" alt="Profile Image" />
            : <Image src="/images/userLogo.svg" className="mr-2" alt="Site Logo" width={32} height={32} />
          }
        </div>
        <div className="pop-up">
          <Pop_up fullName={fullName} active={pop_upActive} />
        </div>
      </div>

    </div>
  )
}

export default TopComponent