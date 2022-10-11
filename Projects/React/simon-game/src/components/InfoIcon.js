import React, { useState } from 'react'

const InfoIcon = ({ handleInfoClick }) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
            <div className="absolute flex items-center top-2 right-2 lg:top-8 lg:right-5 cursor-pointer group z-[100] hover:bg-blacl" onClick={handleInfoClick}>
                {isHovered &&
                    <>
                        <div className=" transition ease-out delay-1000 font-sans font-bold rounded-l-full group-hover:inline text-xs bg-white text-black max-h-[24px]  py-[2px] px-3">
                            How to play
                        </div>
                        <div className="absolute right-4 w-3 h-6 border-l-4 border-[#011F3F] bg-transparent rounded-l-full">

                        </div>
                    </>
                }
                <div className={` rounded-full w-6 h-6 bg-white flex justify-center items-center hover:scale-110`}>
                    <div className="rounded-full w-[21px] h-[21px] bg-black text-center items-center flex justify-center text-white text-[0.9rem] font-bold font-serif" onMouseEnter={() => {
                        setTimeout(() => {
                            setIsHovered(true)
                        }, 300)
                    }}
                        onMouseLeave={() => {
                            setTimeout(() => {
                                setIsHovered(false)
                            }, 300)
                        }}>
                        i
                    </div>
                </div>
            </div>
    )
}

export default InfoIcon