// React Imports...
import { useEffect, useState } from "react"

// App Imports...
import Heading from "./components/Heading";
import BoxContainer from "./components/BoxContainer";
import StartButton from "./components/StartButton";

// App
function App() {

  // States, constants
  
  const buttonColour = ["red", "blue", "green", "yellow"];
  const [level, setLevel] = useState(0);
  const [heading, setHeading] = useState(`Press Start to start the Game`);
  const [isStarted, setIsStarted] = useState(false)
  const [userClickedPattern, setUserClickedPattern] = useState([]);
  const [randomChosenColour, setRandomChosenColour] = useState(null)

  // Functions
  const playSound = (url) => {
    //For Playing Audo
    const audio = new Audio(url);
    audio.play();
  };

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


  useEffect(() => {
    // To Update heading when the game starts
    if (isStarted) {
      setHeading("Starting...")
    }
  }, [isStarted])






  return (
    <div className={`w-full h-[100vh] bg-[#011F3F] text-center`}>
      {/* Heading Component */}
      <Heading level={level} heading={heading} />

      {/* Box Container Component */}
      <BoxContainer randomChosenColour={randomChosenColour} userClick={userClick} playSound={playSound} />


      {/* Start Button Component */}
      <StartButton nextSequence={nextSequence} isStarted={isStarted} setIsStarted={setIsStarted} />
    </div>
  );
}

export default App;
