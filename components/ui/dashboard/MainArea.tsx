import React from 'react'
import Views from './Views'
import Ad from './Ad'
import SupportLine from './SupportLine'
import Banking from './Banking'
import EndTab from './EndTab'
import Copyright from './Copyright'

const MainArea = () => {
    return (
        <div className="flex flex-col items-center pt-10 gap-6" >
            <Views />
            <div className='flex flex-col md:flex-row mt-6 gap-6'>
                <div className="flex flex-col gap-6">
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