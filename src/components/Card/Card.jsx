import "./Card.scss";

const Card = ({ children }) => {
  return (
    <>
      <div className="card__container">{children}</div>
    </>
  );
};

export default Card;
