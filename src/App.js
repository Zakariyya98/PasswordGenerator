import { useState } from "react";

import Card from "./components/Card";
import CharacterLength from "./components/CharacterLength";
import GeneratedPassword from "./components/GeneratedPassword";
import CharacterToggles from "./components/CharacterToggles";
import GenerateButton from "./components/GenerateButton";

import "./App.css";

function App() {
  // To allow the app to have a common ancestor component so the state can
  // be passed between components I have rearranged the way the component
  // state is managed.

  const [rangeValue, setRangeValue] = useState(8);
  const [charactersToggled, setCharactersToggled] = useState([]);

  return (
    <>
      <GeneratedPassword />
      <Card>
        <CharacterLength
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
        />
        <CharacterToggles
          charactersToggled={charactersToggled}
          setCharactersToggled={setCharactersToggled}
          charLength={rangeValue}
        />
        <GenerateButton setChars={charactersToggled} charLength={rangeValue} />
      </Card>
    </>
  );
}

export default App;
