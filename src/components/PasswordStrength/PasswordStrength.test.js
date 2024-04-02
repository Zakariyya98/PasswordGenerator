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
});

describe("Given the user has generated a password with one character set", () => {
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

describe("Given the user has generated a password with two character sets", () => {
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

describe("Given the user has generated a password with three character sets", () => {
  beforeEach(() => {
    render(<PasswordStrength userPassword={"qw3RTy"} />);
  });

  it('Then the strenth meter should read "STRONG"', () => {
    const passwordStrengthMessage = screen.getByTestId(
      "passwordStrengthMessage"
    );
    expect(passwordStrengthMessage).toHaveTextContent("STRONG");
  });
});

describe("Given the user has generated a password with four character sets", () => {
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

afterEach(() => {
  cleanup();
});
