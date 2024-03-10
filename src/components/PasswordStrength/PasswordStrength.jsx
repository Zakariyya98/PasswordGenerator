import "./PasswordStrength.scss";

const PasswordStrength = ({ userPassword }) => {
  //////////////////////////
  // Criteria
  // Needs minimum 8 characters
  // Max characters is 18 but can accept more
  // Needs lowercase, number, uppercase and symbol to be secure
  // Each bar is 25%
  // Bar 1: Weak - Done
  // Bar 2: Medium - Done
  // Bar 3: Strong - Done
  // Bar 4: Very Strong - Done
  // Just a POC for now
  //////////////////////////

  let message = "NO PASSWORD";
  let passwordStrength = 0;
  // Needs to be refactored down
  let activeWeak = false;
  let activeMedium = false;
  let activeStrong = false;
  let activeVeryStrong = false;

  if (
    userPassword.match(/[a-z]+/) &&
    userPassword !== "Select Your Options And Generate"
  ) {
    passwordStrength += 1;
  }

  if (
    userPassword.match(/[A-Z]+/) &&
    userPassword !== "Select Your Options And Generate"
  ) {
    passwordStrength += 1;
  }

  if (userPassword.match(/[0-9]+/)) {
    passwordStrength += 1;
  }
  // eslint-disable-next-line
  if (userPassword.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
    passwordStrength += 1;
  }

  // Message displayed to user
  if (passwordStrength === 1) {
    message = "WEAK";
    // Not efficient
    activeWeak = true;
  }

  if (passwordStrength === 2) {
    message = "MEDIUM";
    // Not efficient
    activeWeak = true;
    activeMedium = true;
  }

  if (passwordStrength === 3) {
    message = "STRONG";
    // Not efficient
    activeWeak = true;
    activeMedium = true;
    activeStrong = true;
  }

  if (passwordStrength === 4) {
    message = "VERY STRONG";
    // Not efficient
    activeWeak = true;
    activeMedium = true;
    activeStrong = true;
    activeVeryStrong = true;
  }

  return (
    <>
      <div className="password-strength__container">
        <div className="password-strength__inner-content">
          <div className="password-strength__title">
            <h1>STRENGTH</h1>
          </div>
          <div className="password-strength__meter-container">
            <p className="password-strength__strength">{message}</p>

            <div
              className={`password-strength__meter--pill ${
                activeWeak === true ? "password-strength__meter--active" : null
              }`}
            ></div>

            <div
              className={`password-strength__meter--pill ${
                activeMedium === true
                  ? "password-strength__meter--active"
                  : null
              }`}
            ></div>

            <div
              className={`password-strength__meter--pill ${
                activeStrong === true
                  ? "password-strength__meter--active"
                  : null
              }`}
            ></div>

            <div
              className={`password-strength__meter--pill  ${
                activeVeryStrong === true
                  ? "password-strength__meter--active"
                  : null
              }`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordStrength;
