import "./PasswordStrength.scss";

const PasswordStrength = ({ userPassword }) => {
  const strengthCriteria = [
    {
      regex: /[a-z]+/,
      name: "Lowercase",
    },
    {
      regex: /[A-Z]+/,
      name: "Uppercase",
    },
    {
      regex: /[0-9]+/,
      name: "Number",
    },
    {
      // eslint-disable-next-line
      regex: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
      name: "Symbol",
    },
  ];

  const passwordStrength = strengthCriteria.reduce(
    (strength, criteria) =>
      strength + (userPassword.match(criteria.regex) ? 1 : 0),
    0
  );

  let message = ["NO PASSWORD", "WEAK", "MEDIUM", "STRONG", "VERY STRONG"][
    passwordStrength
  ];

  let activeClasses = Array.from({ length: 4 }, (_, i) => i < passwordStrength);

  if (userPassword === "Select Your Options And Generate") {
    activeClasses = [false, false, false, false];
    message = "NO PASSWORD";
  }

  return (
    <div
      data-testid="passwordStrength"
      className="password-strength__container"
    >
      <div className="password-strength__inner-content">
        <div className="password-strength__title">
          <h1>STRENGTH</h1>
        </div>
        <div className="password-strength__meter-container">
          <p className="password-strength__strength">{message}</p>

          {activeClasses.map((isActive, index) => (
            <div
              key={index}
              className={`password-strength__meter--pill ${
                isActive ? "password-strength__meter--active" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PasswordStrength;
