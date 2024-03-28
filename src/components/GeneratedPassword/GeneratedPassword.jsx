import "./GeneratedPassword.scss";

const GeneratedPassword = ({ generatedPassword }) => {
  return (
    <>
      <div
        data-testid="generatedPassword"
        className="generated-password__container"
      >
        <div>
          <h1
            data-testid="generatedPassword-display"
            className="generated-password__password"
          >
            {generatedPassword}
          </h1>
        </div>
        <div
          data-testid="generatedPassword-clipboard"
          onClick={() => navigator.clipboard.writeText(generatedPassword)}
        >
          <svg
            className="generated-password__copy-password"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default GeneratedPassword;
