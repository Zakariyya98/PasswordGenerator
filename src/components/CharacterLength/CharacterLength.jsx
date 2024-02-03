import { useState } from "react";
import "./CharacterLength.scss";

const CharacterLength = () => {
  const [rangeValue, setRangeValue] = useState(8);

  const Allowed = {
    Lowers: "qwertyuiopasdfghjklzxcvbnm",
    Numbers: "1234567890",
  };

  const getRandomCharFromString = (str) =>
    str.charAt(Math.floor(Math.random() * str.length));

  const generatePassword = (length) => {
    let pwd = "";
    pwd += getRandomCharFromString(Allowed.Lowers);
    pwd += getRandomCharFromString(Allowed.Numbers);
    for (let i = pwd.length; i < length; i++)
      pwd += getRandomCharFromString(Object.values(Allowed).join(""));
    console.log(pwd);
    return pwd;
  };

  return (
    <div className="char-length__container">
      <div className="char-length__range-value">
        <h1>Character Length</h1>
        <h1>{rangeValue}</h1>
      </div>
      <div>
        <input
          className="char-length__range"
          type="range"
          id="character-length"
          name="character-length"
          min="2"
          max="24"
          step="1"
          defaultValue={8}
          onChange={(event) => setRangeValue(event.target.value)}
        />
      </div>
      <button onClick={() => generatePassword(rangeValue)}>Click me</button>
    </div>
  );
};

export default CharacterLength;
