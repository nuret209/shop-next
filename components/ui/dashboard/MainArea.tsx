import React from 'react'
import Views from './Views'
import Ad from './Ad'
import SupportLine from './SupportLine'
import Banking from './Banking'
import EndTab from './EndTab'
import Copyright from './Copyright'

const MainArea = () => {
    return (
        <div className="bg-[#f6f8fa] w-[100%] flex flex-col items-center  justify-center pt-10 gap-6" >
            <Views />
            <div className='flex sm:flex-wrap mt-6 gap-6 mb-6'>
                <div className="flex flex-col gap-6 sm:justify-start justify-center ">
                    <Ad />
                    <SupportLine />
                </div>
                <Banking />
            </div>
            <EndTab />
            <Copyright />
        </div>
    )
}

export default MainArea