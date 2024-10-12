import React from 'react'
import { DasboardContext, useContext } from './context'
const Views = () => {
    const { timeId } = useContext(DasboardContext);
    return (
        <div>{timeId}</div>
    )
}

export default Views