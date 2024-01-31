import CharacterLength from "../CharacterLength";
import "./Card.scss";

const Card = () => {
  return (
    <>
      <h1>Password Generator</h1>
      <div className="card__container">
        <CharacterLength />
      </div>
    </>
  );
};

export default Card;
