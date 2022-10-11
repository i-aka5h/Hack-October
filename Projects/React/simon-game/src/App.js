// React Imports...
import { useEffect, useState } from "react"

// App Imports...
import Heading from "./components/Heading";
import BoxContainer from "./components/BoxContainer";

// App
function App() {

  // States
  const [level, setLevel] = useState(0);
  const [heading, setHeading] = useState(`Press Start to start the Game`);
  const [isStarted, setIsStarted] = useState(false)




  useEffect(() => {
    // To Update heading when the game starts
    if (isStarted) {
      setHeading("Starting...")
    }
  }, [isStarted])






  return (
    <div className={`w-full h-[100vh] bg-[#011F3F] text-center`}>
      <Heading level={level} heading={heading} />

      <BoxContainer  />
    </div>
  );
}

export default App;
