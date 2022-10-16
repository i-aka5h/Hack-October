import React from 'react'

const GameInfo = ({ reference, showInfo, setShowInfo }) => {
    const steps = [
        "Press Start to start the game.",
        "After a few seconds the game will start.",
        "When a color Box flicker remeber the box and click on it.",
        "If you click on the correct box then a new/same box flicker again.",
        "And now you have to click all the previous boxes and then this box.",
        "in the sequence if you click on any wrong box then that will be wrong answer",
        "If your answer is wrong then the stat button appears again, ang heading changes to 'Game Over start Again'"

    ]
    return (
        <>
            <button
                className="hidden"
                type="button"
                ref={reference}
                onClick={() => setShowInfo(true)}
            >
                Open Card
            </button>
            {showInfo && (
                <>
                    <div
                        className="font-sans font-semibold justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-[80vw] mx-auto max-w-5xl">
                            {/*content*/}
                            <div className="border-0  rounded-xl shadow-lg relative flex flex-col w-full bg-[#0e2d4d] text-[#fef2bf] outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-between py-3 lg:py-5 px-5 lg:px-7 border-b-2 border-solid border-slate-200 rounded-t">
                                    <div>
                                        Simon Game playing Guide
                                    </div>

                                    <div className="material-symbols-outlined text-gray-400 hover:text-red-500 cursor-pointer font-extrabold" onClick={() => setShowInfo(false)}>
                                        close

                                    </div>
                                </div>
                                {/*body*/}
                                <div className="py-2 px-5 lg:py-5 lg:px-7 items-center">
                                    {/* Body Header */}
                                    <div className=' mb-4  font-bold text-lg text-[#fef2bf] lg:text-xl'>
                                        Steps to play :
                                    </div>
                                    {/* Body Main */}
                                    <div className='px-4'>
                                        <ol className=''>
                                            {steps.map((step, key) =>
                                                <ListItem key={key} text={step} />
                                            )}
                                        </ol>
                                    </div>

                                </div>
                                {/*footer*/}
                                <div className="bg-[#011F3F] m-2 mt-10 h-10 rounded-lg text-center items-center flex justify-center">
                                    All rights reserved &copy; dhawal-793
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </>
    )
}

export default GameInfo;


const ListItem = ({ text }) => {
    return (
        <li className='leading-6 lg:leading-8 relative text-xs md:text-sm'>
            <span className='absolute top-[10px] md:top-[7px] lg:top-3 w-[5px] h-[5px] md:w-2 md:h-2 bg-[#fef2b2] rounded-full'></span>
            <p className='ml-4 md:ml-5'> {text}</p>
        </li>
    )
}
export { ListItem };