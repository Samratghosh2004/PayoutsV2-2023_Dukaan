import React from 'react'
import Navbar from '../Navbar/Navbar'
import Transaction from '../Transaction/Transaction'
import Overview from '../Overview/Overview'

function BodyPart() {
    return (
        <>
        <div className=' h-[1482px]  w-5/6 bg-[#FAFAFA]'>
            <Navbar/>
            <Overview/>
            <h1 className="text-[#1A181E] text-[20px] font-medium leading-7 mx-9 pb-5">Transactions | This Month</h1>
            <Transaction/>
        </div>
        </>
    )
}

export default BodyPart
