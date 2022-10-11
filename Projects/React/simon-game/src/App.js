import { useState } from "react"
import Heading from "./components/Heading";


function App() {

  const [level, setLevel] = useState(0);
  const [heading, setHeading] = useState(`Press Start to start the Game`);
  return (
    <div className={`w-full h-[100vh] bg-[#011F3F] text-center`}>
      <Heading level={level} heading={heading} />
    </div>
  );
}

export default App;
