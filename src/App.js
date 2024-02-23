import { useState } from "react";

import Card from "./components/Card";
import CharacterLength from "./components/CharacterLength";
import GeneratedPassword from "./components/GeneratedPassword";
import CharacterToggles from "./components/CharacterToggles";
import GenerateButton from "./components/GenerateButton";
import PasswordStrength from "./components/PasswordStrength";

import "./App.scss";

function App() {
  // To allow the app to have a common ancestor component so the state can
  // be passed between components I have rearranged the way the component
  // state is managed.

  const [rangeValue, setRangeValue] = useState(8);
  const [charactersToggled, setCharactersToggled] = useState([]);
  const [generatedPassword, setGeneratedPassword] = useState(
    "Click Generate Password Button"
  );

  return (
    <>
      <div className="app__container">
        <GeneratedPassword generatedPassword={generatedPassword} />
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
          <PasswordStrength userPassword={generatedPassword} />
          <GenerateButton
            setChars={charactersToggled}
            charLength={rangeValue}
            generatedPassword={generatedPassword}
            setGeneratedPassword={setGeneratedPassword}
          />
        </Card>
      </div>
    </>
  );
}

export default App;
