import { IoIosArrowDown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

const EndBanner = () => {
    return (
        <div className="endBanner flex absolute text-[14px] cursor-pointer left-[44px] items-center justify-between w-[calc(100%-88px)] bottom-[26px] text-[#525866]">
            <div className="copyright">© 2024 wagmigg Teknoloji A.Ş.</div>
            <div className="lang flex items-center">
                <TbWorld />
                <span className="ml-[2px] flex items-center">
                    TR
                    <IoIosArrowDown />
                </span>
            </div>
        </div>
    )
}

export default EndBanner