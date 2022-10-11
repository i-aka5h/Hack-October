
const Heading = ({ level, heading }) => {
    return (

        <h1
            className={`absolute w-[80vw] leading-9  top-11 md:top-9 lg:top-8 left-1/2 -translate-x-[50%] font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl text-[#fef2bf] items-center`}
        >
            {!heading && `Level : ${level}`}
            {heading}
        </h1>

    )
}

export default Heading