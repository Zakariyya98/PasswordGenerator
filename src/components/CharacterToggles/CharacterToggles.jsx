import "./CharacterToggles.scss";

const CharacterToggles = () => {
  return (
    <div className="character-toggles__container">
      <div>
        <input type="checkbox" />
        <label>Include Uppercase Letters</label>
      </div>

      <div>
        <input type="checkbox" />
        <label>Include Lowercase Letters</label>
      </div>

      <div>
        <input type="checkbox" />
        <label>Include Numbers</label>
      </div>

      <div>
        <input type="checkbox" />
        <label>Include Symbols</label>
      </div>
    </div>
  );
};

export default CharacterToggles;
