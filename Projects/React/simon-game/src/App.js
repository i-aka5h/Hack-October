// React Imports...
import { useEffect, useState, useRef } from "react"

// App Imports...
import Heading from "./components/Heading";
import BoxContainer from "./components/BoxContainer";
import StartButton from "./components/StartButton";
import InfoIcon from "./components/InfoIcon";

import wrong from "./sounds/wrong.mp3";
import GameInfo from "./components/GameInfo";


// App
function App() {

  // States, constants and references
  const ref = useRef(null)
  const buttonColour = ["red", "blue", "green", "yellow"];
  const [gamePattern, setGamePattern] = useState([]);
  const [userClickedPattern, setUserClickedPattern] = useState([]);
  const [level, setLevel] = useState(0);
  const [heading, setHeading] = useState(`Press Start to start the Game`);
  const [isStarted, setIsStarted] = useState(false)
  const [randomChosenColour, setRandomChosenColour] = useState(null)
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [showInfo, setShowInfo] = useState(false)



  // Functions
  const playSound = (url) => {
    //For Playing Audo
    const audio = new Audio(url);
    audio.play();
  };

  const handleInfoClick = () => {
    // To open Info Menu
    ref.current.click();
  }

  const userClick = (color) => {
    // To check for user Click
    setUserClickedPattern([...userClickedPattern, color]);
  };


  const nextSequence = () => {
    // To Generate next sequence 
    setHeading(null);
    setLevel(level + 1);
    setUserClickedPattern([]);
    setRandomChosenColour(buttonColour[Math.floor(Math.random() * 4)]);
  };

  const checkAnswer = (i) => {
    // To check the user answer 
    if (userClickedPattern[i] !== gamePattern[i]) {
      setWrongAnswer(true);
      setIsStarted(false)
      setHeading("Game-Over Start Again");
      playSound(wrong);
      setTimeout(() => {
        setWrongAnswer(false);
      }, 200);
      setGamePattern([]);
      setLevel(0);
    } else if (i + 1 === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 700);
    }
  };


  useEffect(() => {
    // To re-render component after user clicks
    if (userClickedPattern.length !== 0) {
      checkAnswer(userClickedPattern.length - 1);
    }
    // eslint-disable-next-line
  }, [userClickedPattern]);

  useEffect(() => {
    // To re-render component after a new color is choosen
    if (randomChosenColour) {
      setGamePattern((gamepattern) => [...gamepattern, randomChosenColour]);
      setRandomChosenColour(null)
    }
  }, [randomChosenColour]);

  useEffect(() => {
    // To re-render component after the level changes or the new color choosed or the user selects a wrong answer

  }, [wrongAnswer, level, gamePattern])
  useEffect(() => {
    // To Update heading when the game starts
    if (isStarted) {
      setHeading("Starting...")
    }
  }, [isStarted])


  return (
    <>
      {/* Info menu for the game */}
      <GameInfo reference={ref} showInfo={showInfo} setShowInfo={setShowInfo} />

      {/* Main container for the game */}
      <div className={`w-full h-[100vh] ${wrongAnswer ? "bg-[#ff0000] opacity-80" : "bg-[#011F3F]"} text-center ${showInfo && "blur-sm"}`}>


        {/* Info Icon component */}
        {!showInfo && !isStarted && <InfoIcon handleInfoClick={handleInfoClick} />}

        {/* Heading Component */}
        <Heading level={level} heading={heading} />

        {/* Box Container Component */}
        <BoxContainer randomChosenColour={randomChosenColour} userClick={userClick} playSound={playSound} />


        {/* Start Button Component */}
        <StartButton nextSequence={nextSequence} isStarted={isStarted} setIsStarted={setIsStarted} />
      </div>
    </>
  );
}

export default App;
