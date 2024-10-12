import { TabGroup, TabList, Tab } from "@headlessui/react";
import { useContext, useEffect } from "react";
import { RiHomeSmile2Line, RiContactsBookLine , RiSettingsFill} from "react-icons/ri";
import { DasboardContext } from "./context";
import { GiSpanner } from "react-icons/gi";

const EndTab = () => {
    const { page, setPage } = useContext(DasboardContext);
    useEffect(() => console.log(`active page ${page}`))
    return (
        <div className="bg-white flex gap-4 rounded-2xl items-center [box-shadow:0px_1px_2px_rgba(228,_229,_231,_0.24)] p-[10px] border border-[#E2E4E9]">
            <TabGroup onChange={(index) => setPage(index)}>
                <TabList className="flex relative text-[#868C98] items-center after:absolute after:h-[calc(100%-16px)] after:w-px after:bg-[#e3e4e8] after:bottom-[10px] after:right-[-8px] ">
                    <Tab className={`flex gap-2 text-center outline-none font-medium items-center  p-[10px] rounded-[10px] ${page == 0 && "bg-[#f6f8fa] text-[#0A0D14] font-medium"}`}>
                        <RiHomeSmile2Line size={20} />
                        İstatistikler
                    </Tab>
                    <Tab className={`flex mr-2 outline-none items-center p-[10px] rounded-[10px] ${page == 1 && "bg-[#f6f8fa] text-[#0A0D14] font-medium"} `}>
                        <RiContactsBookLine size={20} />
                    </Tab>
                </TabList>
            </TabGroup>
            <div className="text-[#0CCC4D] flex items-center px-3 py-[5px] gap-2">
                <RiSettingsFill/>
                <span>Aktif</span>
            </div>
        </div>
    )
}

export default EndTab