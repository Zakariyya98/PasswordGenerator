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
  });
});

afterEach(() => {
  cleanup();
});
