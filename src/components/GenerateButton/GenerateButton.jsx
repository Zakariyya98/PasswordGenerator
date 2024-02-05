import { useState } from "react";
import "./GenerateButton.scss";

const GenerateButton = ({ charLength }) => {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const Allowed = {
    Lowers: "qwertyuiopasdfghjklzxcvbnm",
    Numbers: "1234567890",
  };

  const getRandomCharFromString = (str) =>
    str.charAt(Math.floor(Math.random() * str.length));

  const generatePassword = (length) => {
    let pwd = "";
    // Could do a switch case here where the value of ticked boxes
    // can generate the required combinations.
    pwd += getRandomCharFromString(Allowed.Lowers);
    pwd += getRandomCharFromString(Allowed.Numbers);
    for (let i = pwd.length; i < length; i++)
      pwd += getRandomCharFromString(Object.values(Allowed).join(""));
    setGeneratedPassword(pwd);
  };

  return (
    <div>
      <button
        onClick={() => generatePassword(charLength)}
        className="generate-button__container"
      >
        Generate Password
      </button>
      <p>Generated Password: {generatedPassword}</p>
    </div>
  );
};

export default GenerateButton;
