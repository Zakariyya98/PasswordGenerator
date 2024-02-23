import "./PasswordStrength.scss";

const PasswordStrength = ({ userPassword }) => {
  //////////////////////////
  // Criteria
  // Needs minimum 8 characters
  // Max characters is 18 but can accept more
  // Needs lowercase, number, uppercase and symbol to be secure
  // Each bar is 25%
  // Bar 1: Weak
  // Bar 2: Medium
  // Bar 3: Strong
  // Bar 4: Very Strong
  // Just a POC for now
  //////////////////////////

  let message = "No Password";
  let passwordStrength = 0;

  if (userPassword.match(/[a-z]+/)) {
    passwordStrength += 1;
  }

  if (userPassword.match(/[A-Z]+/)) {
    passwordStrength += 1;
  }

  if (userPassword.match(/[0-9]+/)) {
    passwordStrength += 1;
  }

  if (userPassword.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
    passwordStrength += 1;
  }

  // Message displayed to user
  if (passwordStrength === 1) {
    message = "Weak";
  }

  if (passwordStrength === 2) {
    message = "Medium";
  }

  if (passwordStrength === 3) {
    message = "Strong";
  }

  if (passwordStrength === 4) {
    message = "Very Strong";
  }

  return (
    <>
      <div className="password-strength__container">
        <div className="password-strength__title">
          <h1>Password Strength</h1>
        </div>
        <div className="password-strength__meter-container">
          <p>{message}</p>
          <div className="password-strength__meter"></div>
          <div className="password-strength__meter"></div>
          <div className="password-strength__meter"></div>
          <div className="password-strength__meter"></div>
        </div>
      </div>
    </>
  );
};

export default PasswordStrength;
