import "./GenerateButton.scss";

const GenerateButton = ({ charLength, setChars, setGeneratedPassword }) => {
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
      <div data-testid="generateButton" className="generate-button__container">
        <button
          onClick={() => generatePassword(charLength)}
          className="generate-button__button"
        >
          Generate Password
        </button>
      </div>
    </>
  );
};

export default GenerateButton;
