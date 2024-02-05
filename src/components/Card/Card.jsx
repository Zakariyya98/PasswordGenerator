import CharacterLength from "../CharacterLength";
import CharacterToggles from "../CharacterToggles";
import "./Card.scss";

const Card = () => {
  return (
    <>
      <h1>Password Generator</h1>
      <div className="card__container">
        <CharacterLength />
        <CharacterToggles />
      </div>
    </>
  );
};

export default Card;
