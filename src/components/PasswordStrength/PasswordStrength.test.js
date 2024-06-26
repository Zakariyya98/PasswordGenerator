import PasswordStrength from "./PasswordStrength";

import { render, screen, cleanup } from "@testing-library/react";

describe("Given the user is using the password generator", () => {
  describe("When the user has landed on a fresh instance of the app", () => {
    beforeEach(() => {
      render(<PasswordStrength userPassword={""} />);
    });

    it("Then the app should render with the PasswordStrength component visible on the page", () => {
      const passwordStrengthComponent = screen.getByTestId("passwordStrength");
      expect(passwordStrengthComponent).toBeInTheDocument;
    });

    it('Then the initial value should be "NO PASSWORD"', () => {
      const passwordStrengthMessage = screen.getByTestId(
        "passwordStrengthMessage"
      );
      expect(passwordStrengthMessage).toHaveTextContent("NO PASSWORD");
    });
  });

  // The way the strength meter is wired to work is based off of active character
  // sets see README for more. These sets can be in any order so for example if
  // the userPassword was "3" this would still show WEAK as only the Number
  // character set is active.

  // Another example is if the userPassword was ":Q", this would show MEDIUM as
  // only the Symbol character set and the Uppercase character sets are active.

  describe("When the user has generated a password with one character set", () => {
    beforeEach(() => {
      render(<PasswordStrength userPassword={"qwerty"} />);
    });

    it('Then the strenth meter should read "WEAK"', () => {
      const passwordStrengthMessage = screen.getByTestId(
        "passwordStrengthMessage"
      );
      expect(passwordStrengthMessage).toHaveTextContent("WEAK");
    });
  });

  describe("When the user has generated a password with two character sets", () => {
    beforeEach(() => {
      render(<PasswordStrength userPassword={"qweRTY"} />);
    });

    it('Then the strenth meter should read "MEDIUM"', () => {
      const passwordStrengthMessage = screen.getByTestId(
        "passwordStrengthMessage"
      );
      expect(passwordStrengthMessage).toHaveTextContent("MEDIUM");
    });
  });

  describe("When the user has generated a password with three character sets", () => {
    beforeEach(() => {
      render(<PasswordStrength userPassword={"qw3R7Y"} />);
    });

    it('Then the strenth meter should read "STRONG"', () => {
      const passwordStrengthMessage = screen.getByTestId(
        "passwordStrengthMessage"
      );
      expect(passwordStrengthMessage).toHaveTextContent("STRONG");
    });
  });

  describe("When the user has generated a password with all four character sets", () => {
    beforeEach(() => {
      render(<PasswordStrength userPassword={"qw3RTy;"} />);
    });

    it('Then the strenth meter should read "VERY STRONG"', () => {
      const passwordStrengthMessage = screen.getByTestId(
        "passwordStrengthMessage"
      );
      expect(passwordStrengthMessage).toHaveTextContent("VERY STRONG");
    });
  });
});

afterEach(() => {
  cleanup();
});
