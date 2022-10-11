

const BoxContainer = () => {
    return (
        <>
            <div className=" block w-fit mx-auto pt-48 ">
                <div className="flex">
                    <div>
                        <button className={`bg-[#ff0000] inline-block m-[1.4vw] h-[18vw] w-[18vw] max-h-[10rem] max-w-[10rem] border-4 md:border-8  border-black rounded-[20%] `}></button>
                    </div>
                    <div>
                        <button className={`bg-[#008000] inline-block m-[1.4vw] h-[18vw] w-[18vw] max-h-[10rem] max-w-[10rem] border-4 md:border-8  border-black rounded-[20%] `}></button>
                    </div>
                </div>

                <div className="flex">
                    <div>
                        <button className={`bg-[#0000ff] inline-block m-[1.4vw] h-[18vw] w-[18vw] max-h-[10rem] max-w-[10rem] border-4 md:border-8  border-black rounded-[20%] `}></button>
                    </div>
                    <div>
                        <button className={`bg-[#ffff00] inline-block m-[1.4vw] h-[18vw] w-[18vw] max-h-[10rem] max-w-[10rem] border-4 md:border-8  border-black rounded-[20%] `}></button>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default BoxContainer