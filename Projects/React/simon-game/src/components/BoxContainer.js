import React from 'react'

import red from "../sounds/red.mp3";
import green from "../sounds/green.mp3";
import blue from "../sounds/blue.mp3";
import yellow from "../sounds/yellow.mp3";
import Box from './Box';

const BoxContainer = ({ randomChosenColour, userClick, playSound }) => {
    return (
        <>
            <div className=" block w-fit mx-auto pt-48 ">
                <div className="flex">
                    <Box
                        color="red"
                        url={red}
                        next={randomChosenColour}
                        userClick={userClick}
                        playSound={playSound}
                    />
                    <Box
                        color="blue"
                        url={blue}
                        next={randomChosenColour}
                        userClick={userClick}
                        playSound={playSound}
                    />
                </div>

                <div className="flex">
                    <Box
                        color="yellow"
                        url={yellow}
                        next={randomChosenColour}
                        userClick={userClick}
                        playSound={playSound}
                    />
                    <Box
                        color="green"
                        url={green}
                        next={randomChosenColour}
                        userClick={userClick}
                        playSound={playSound}
                    />
                </div>
            </div>
        </>
    )
}

export default BoxContainer