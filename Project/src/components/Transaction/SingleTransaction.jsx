import React from 'react'

function SingleTransaction() {
    return (
        <>
        <div className="px-6 ">
            <div className=' flex justify-between text-[16px] py-[10px]  items-center flex-[1_0_0%] gap-10'>
                <div className=" text-[#146EB4] font-medium flex-[1_0_0%] justify-start flex">#281209</div>
                <div className=" text-[#1A181E] flex-[1_0_0%] flex justify-start">7 July, 2023</div>
                <div className=" text-[#1A181E] flex-[1_0_0%] flex justify-end">&#8377;1,278.23</div>
                <div className=" text-[#1A181E] flex-[1_0_0%] flex justify-end">&#8377;22</div>
            </div> 
            <hr className=' border-[0.1px] border-[#4D4D4D] opacity-20' />
        </div>
        </>
    )
}

export default SingleTransaction
