import React from 'react'
import SingleTransaction from './SingleTransaction'

function Transaction() {


    return (
        <>
        
        <div className=" mx-8 h-auto bg-white pb-2 rounded-lg shadow-[0_2px_6px_0_rgba(26,24,30,0.04)]">
            <div className="px-3 py-3">
        <div className=" flex items-center justify-between ">
            <div className=""><form>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-5 h-4 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                            <input id="default-search" className=" w-[248px] p-2 px-5 ps-10 text-[15px]  border rounded-md bg-[#fff] border-[#d9d9d9] placeholder-gray-400 text-gray-400 " placeholder="Search by order ID..." required />
        
                        </div>
                    </form></div>
            <div className=" flex items-center gap-2">
                <div className=" flex items-center justify-center gap-2 border border-[#d9d9d9] w-[79px] px-3 py-[6px] rounded">
                    <div className="text-[#4d4d4d]">Sort</div>
                    <div className=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.62288 9.93365C1.83116 9.72537 2.16885 9.72537 2.37713 9.93365L4.64088 12.1974L6.90462 9.93365C7.1129 9.72537 7.45059 9.72537 7.65887 9.93365C7.86715 10.1419 7.86715 10.4796 7.65887 10.6879L5.018 13.3288C4.80972 13.537 4.47203 13.537 4.26375 13.3288L1.62288 10.6879C1.4146 10.4796 1.4146 10.1419 1.62288 9.93365Z" fill="#4D4D4D"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.64083 2.51505C4.93538 2.51505 5.17416 2.75383 5.17416 3.04838L5.17416 12.9516C5.17416 13.2462 4.93538 13.485 4.64083 13.485C4.34628 13.485 4.1075 13.2462 4.1075 12.9516L4.1075 3.04838C4.1075 2.75383 4.34628 2.51505 4.64083 2.51505Z" fill="#4D4D4D"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3771 6.06635C14.1688 6.27463 13.8311 6.27463 13.6229 6.06635L11.3591 3.80261L9.09538 6.06635C8.8871 6.27463 8.54941 6.27463 8.34113 6.06635C8.13285 5.85807 8.13285 5.52039 8.34113 5.31211L10.982 2.67124C11.1903 2.46296 11.528 2.46296 11.7362 2.67124L14.3771 5.31211C14.5854 5.52039 14.5854 5.85807 14.3771 6.06635Z" fill="#4D4D4D"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3592 13.485C11.0646 13.485 10.8258 13.2462 10.8258 12.9516L10.8258 3.04837C10.8258 2.75382 11.0646 2.51503 11.3592 2.51503C11.6537 2.51503 11.8925 2.75382 11.8925 3.04837L11.8925 12.9516C11.8925 13.2462 11.6537 13.485 11.3592 13.485Z" fill="#4D4D4D"/>
</svg></div>
                </div>
                <div className="border border-[#d9d9d9] w-10 h-10 flex items-center justify-center rounded">


                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z" fill="#4D4D4D"/>
</svg>

                </div>
            </div>
           </div>



           <div className="flex w-full h-[40px] bg-[#F2F2F2] mt-3 py-[10px] px-3 items-center justify-between rounded gap-10 text-[#4D4D4D]">
            <div className="flex items-center justify-start flex-[1_0_0%]">
              <h2>Order ID</h2>
            </div>
            <div className="flex items-center justify-start gap-1 flex-[1_0_0%]">
              <h2>Order date</h2>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M3.43025 6.23409L0.606918 2.3286C0.548707 2.24507 0.517907 2.15037 0.517581 2.05392C0.517255 1.95746 0.547415 1.86262 0.60506 1.77882C0.662705 1.69502 0.745826 1.62519 0.846154 1.57627C0.946481 1.52736 1.06052 1.50106 1.17692 1.5H6.82358C6.93998 1.50106 7.05402 1.52736 7.15435 1.57627C7.25468 1.62519 7.3378 1.69502 7.39544 1.77882C7.45309 1.86262 7.48325 1.95746 7.48292 2.05392C7.4826 2.15037 7.45179 2.24507 7.39358 2.3286L4.57025 6.23409C4.51083 6.31526 4.42716 6.38238 4.32732 6.42895C4.22747 6.47553 4.11483 6.5 4.00025 6.5C3.88567 6.5 3.77303 6.47553 3.67319 6.42895C3.57334 6.38238 3.48967 6.31526 3.43025 6.23409Z" fill="#4D4D4D"/>
                </svg>
                </div>
            </div>
            <div className="flex items-center justify-end flex-[1_0_0%]">
              <h2>Order amount</h2>
            </div>
            <div className="flex items-center justify-end gap-1 flex-[1_0_0%] ">
              <h2>Transaction fees</h2>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <g clip-path="url(#clip0_1_1589)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99998 1.63336C4.03605 1.63336 1.63332 4.0361 1.63332 7.00003C1.63332 9.96396 4.03605 12.3667 6.99998 12.3667C9.96391 12.3667 12.3666 9.96396 12.3666 7.00003C12.3666 4.0361 9.96391 1.63336 6.99998 1.63336ZM0.699982 7.00003C0.699982 3.52063 3.52059 0.700027 6.99998 0.700027C10.4794 0.700027 13.3 3.52063 13.3 7.00003C13.3 10.4794 10.4794 13.3 6.99998 13.3C3.52059 13.3 0.699982 10.4794 0.699982 7.00003Z" fill="#4D4D4D"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99998 6.62365C7.25771 6.62365 7.46665 6.83259 7.46665 7.09032L7.46666 9.44587C7.46666 9.7036 7.25772 9.91253 6.99999 9.91254C6.74226 9.91254 6.53332 9.7036 6.53332 9.44587L6.53332 7.09032C6.53331 6.83259 6.74225 6.62366 6.99998 6.62365Z" fill="#4D4D4D"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5278 4.75836C7.5278 5.04985 7.29149 5.28616 7 5.28616C6.7085 5.28616 6.47219 5.04985 6.47219 4.75836C6.47219 4.46686 6.7085 4.23055 7 4.23055C7.29149 4.23055 7.5278 4.46686 7.5278 4.75836Z" fill="#4D4D4D"/>
  </g>
  <defs>
    <clipPath id="clip0_1_1589">
      <rect width="14" height="14" fill="white"/>
    </clipPath>
  </defs>
</svg>
              </div>
            </div>
          </div>



        </div>

{/* Header component */}
            
{/*  */}
            {
                Array(19).fill(<SingleTransaction />)        

            }


            
<div className="flex w-[610px] h-8 my-7  mx-auto text-[#4D4D4D] justify-between">
          <div className="flex p-[6px_12px_6px_6px] justify-center items-center gap-[6px] rounded border border-[#D9D9D9]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.7803 3.96967C11.4874 3.67678 11.0126 3.67678 10.7197 3.96967L6.21967 8.46967C6.07902 8.61032 6 8.80109 6 9C6 9.19891 6.07902 9.38968 6.21967 9.53033L10.7197 14.0303C11.0126 14.3232 11.4874 14.3232 11.7803 14.0303C12.0732 13.7374 12.0732 13.2626 11.7803 12.9697L7.81066 9L11.7803 5.03033C12.0732 4.73744 12.0732 4.26256 11.7803 3.96967Z"
                  fill="#4D4D4D"
                />
              </svg>
            </div>
            <h3>Previous</h3>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex w-7 h-7 py-[2px] px-0 justify-center gap-2 rounded">1</div>
            <div className="flex w-7 h-7 py-[2px] px-0 justify-center gap-2 rounded">...</div>
            <div className="flex w-7 h-7 py-[2px] px-2 justify-center gap-[6px] rounded text-white bg-[#146EB4]">10</div>
            <div className="flex w-7 h-7 py-[2px] px-0 justify-center gap-2 rounded">11</div>
            <div className="flex w-7 h-7 py-[2px] px-0 justify-center gap-2 rounded">12</div>
            <div className="flex w-7 h-7 py-[2px] px-0 justify-center gap-2 rounded">13</div>
            <div className="flex w-7 h-7 py-[2px] px-0 justify-center gap-2 rounded">14</div>
            <div className="flex w-7 h-7 py-[2px] px-0 justify-center gap-2 rounded">15</div>
            <div className="flex w-7 h-7 py-[2px] px-0 justify-center gap-2 rounded">16</div>
            <div className="flex w-7 h-7 py-[2px] px-0 justify-center gap-2 rounded">17</div>
            <div className="flex w-7 h-7 py-[2px] px-0 justify-center gap-2 rounded">18</div>
          </div>
          <div className="flex p-[6px_6px_6px_12px] justify-center items-center gap-[6px] rounded border border-[#D9D9D9]">
            <h3>Next</h3>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z"
                  fill="#4D4D4D"
                />
              </svg>
            </div>
        </div>


            
        </div>
        </div>
        
        </>
    )
}

export default Transaction
