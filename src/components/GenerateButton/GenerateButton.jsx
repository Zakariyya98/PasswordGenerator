import { useState } from "react";
import "./GenerateButton.scss";

const GenerateButton = ({ charLength, setChars }) => {
  const [generatedPassword, setGeneratedPassword] = useState("");

  const getRandomCharFromString = (str) =>
    str.charAt(Math.floor(Math.random() * str.length));

  const generatePassword = (length) => {
    let pwd = "";
    for (let i = pwd.length; i < length; i++)
      pwd += getRandomCharFromString(Object.values(setChars).join(""));
    setGeneratedPassword(pwd);
  };

  return (
    <>
      <div className="generate-button__container">
        <p>Generated Password: {generatedPassword}</p>
        <button
          onClick={() => generatePassword(charLength.charLength)}
          className="generate-button__button"
        >
          Generate Password
        </button>
      </div>
    </>
  );
};

export default GenerateButton;
