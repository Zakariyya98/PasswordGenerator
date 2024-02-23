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

  const checkPassword = (password) => {
    // regex to check if the characters are
    // present in the password

    if (password.match(/[a-z]+/)) {
      console.log("password contains a lowercase letter");
    }

    if (password.match(/[A-Z]+/)) {
      console.log("password contains a uppercase letter");
    }

    if (password.match(/[0-9]+/)) {
      console.log("Password contains a number");
    }

    if (password.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
      console.log("password contains a symbol");
    }
  };

  console.log(checkPassword(userPassword));

  return (
    <>
      <div className="password-strength__container">
        <div className="password-strength__title">
          <h1>Password Strength</h1>
        </div>
        <div className="password-strength__meter-container">
          <p>Weak</p>
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
