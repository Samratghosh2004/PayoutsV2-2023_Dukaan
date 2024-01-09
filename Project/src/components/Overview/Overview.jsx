import React from 'react'

function Overview() {
    return (
        
          <div className="flex flex-col items-start gap-5 self-stretch w-auto h-[178px] m-8 bg-[#FAFAFA]">
            <div className="flex items-center self-stretch justify-between">
              <h1 className="text-[#1A181E] text-[20px] font-medium leading-7">Overview</h1>
              <div className=" bg-white flex w-[137px] h-[36px] px-3 py-2 gap-2 items-center justify-between border border-[#D9D9D9] rounded ">
                <h3 className=' text-[#4d4d4d]'>Last Month</h3>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-5 self-stretch w-full h-full">
                <div className="flex flex-col p-5 items-start gap-4 flex-[1_0_0%] rounded-lg bg-white shadow-[0_2px_6px_0_rgba(26,24,30,0.04)] w-auto h-full self-stretch">
                    <h2 className=" text-base text-[#4D4D4D] font-normal">Online orders</h2>
                    <h1 className=" text-[32px] leading-[38px] font-medium">231</h1>
                </div>
                <div className="flex bg-white p-5 flex-col items-start gap-4 flex-[1_0_0%] rounded-lg shadow-[0_2px_6px_0_rgba(26,24,30,0.04)] w-auto h-full self-stretch">
                    <h2 className=" text-base text-[#4D4D4D] font-normal">Amount received</h2>
                    <h1 className=" text-[32px] leading-[38px] font-medium">&#8377;23,92,312.19</h1> 
                </div>
            </div>
                
          </div>
        
    )
}

export default Overview
