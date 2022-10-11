
import { useEffect, useState } from "react";
const Box = ({ color, url, next, userClick, playSound }) => {
    const bg = {
        "red": "bg-[#ff0000]",
        "green": "bg-[#008000]",
        "blue": "bg-[#0000ff]",
        "yellow": "bg-[#ffff00]",
    }

    const [isClicked, setIsClicked] = useState(false)
    const [isNext, setIsNext] = useState(null)

    const handleClick = () => {
        setIsClicked(true);
        playSound(url)
        userClick(color)
        setTimeout(() => {
            setIsClicked(false)
        }, 100);

    }
    useEffect(() => {
        if (next === color) {
            setIsNext(color)
            playSound(url)
            setTimeout(() => {
                setIsNext(null)
            }, 200);
        }
    }, [next, playSound, color, url])

    return (
        <div>
            <button id={color} className={`${isClicked ? "bg-[#808080] shadow-[0px_0px_20px_rgb(255,255,255)]" : bg[color]} ${isNext === color && "transition ease-linear bg-gray-400 scale-110"} inline-block m-[1.4vw] h-[18vw] w-[18vw] max-h-[10rem] max-w-[10rem] border-4 md:border-8  border-black rounded-[20%] `} onClick={handleClick} ></button>
        </div>
    );
};

export default Box;