'use client'
import React from "react"

interface TabProps{
    TabTitles : Array<string>
    TabSVGS : Array<React.ReactNode>
    defaultTab : number
    a: React.Dispatch<React.SetStateAction<number>>
}

function Tab({defaultTab, a , TabSVGS, TabTitles} : TabProps) {

    const [active, setactive] = React.useState(defaultTab);
    return (
        <>
            {TabTitles.map((title , index : number) => <div key={index} className={
                `transition-all text-[10px] whitespace-nowrap flex-col sm:flex-row cursor-pointer duration-200 p-[12px] w-1/4 flex sm:text-[14px] items-center justify-center text-[#868c98] rounded-[100px] no-underline stroke-[#868c98]
                 ${active == index && "text-[#0a0d14] px-[16px] py-[12px] bg-[#fff] [box-shadow:0px_6px_10px_rgba(27,_28,_29,_0.06),_0px_2px_4px_rgba(27,_28,_29,_0.02)]" }`
                } onClick={() => { setactive(index); a(index + 1) }}>
                 {TabSVGS[index]}
                 <span className="whitespace-nowrap  items-center">{title}</span>               
                </div >)}
        </>
    )
}
export default Tab