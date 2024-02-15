import "./GeneratedPassword.scss";

const GeneratedPassword = ({ generatedPassword }) => {
  return (
    <>
      <div className="generated-password__container">
        <div>
          <h1 className="generated-password__password">{generatedPassword}</h1>
        </div>
      </div>
    </>
  );
};

export default GeneratedPassword;
