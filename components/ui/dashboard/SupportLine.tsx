import { TbArrowUpRight } from "react-icons/tb";

const SupportLine = () => {
    return (
        <div> <div className='bg-white rounded-2xl [box-shadow:0px_1px_2px_rgba(228,_229,_231,_0.24)] px-5 py-4 border border-[#E2E4E9] text-[#525866] sm:w-[392px] h-[178px] flex flex-col justify-between'>
            <span className="border border-[#e3e4e8] rounded-full w-[40px] h-[40px] text flex items-center justify-center [box-shadow:0px_1px_2px_rgba(228,_229,_231,_0.24)] ">
                <TbArrowUpRight size={24} />
            </span>
            <div>
                <h4 className='mb-1'>Destek Hattı</h4>
                <h3 className='text-2xl flex text-[#0A0D14] items-center font-medium gap-2'>09:00 - 00:00 <span className="text-xs bg-[#CBF5E5] text-[#176448] px-[6px] py-[2px] rounded-full" >Arası Hizmetinizdeyiz</span> </h3>
            </div>
        </div></div>
    )
}

export default SupportLine