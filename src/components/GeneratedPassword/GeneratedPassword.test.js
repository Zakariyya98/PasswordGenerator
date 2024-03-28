import GeneratedPassword from "./GeneratedPassword";

import { render, screen, cleanup } from "@testing-library/react";

describe("Given the user is using the password generator", () => {
  describe("When the user has landed on a fresh instance of the app", () => {
    beforeEach(() => {
      render(<GeneratedPassword />);
    });

    it("then the app should render with the GeneratedPassword Component visible on the page", () => {
      const generatedPasswordComponent =
        screen.getByTestId("generatedPassword");

      expect(generatedPasswordComponent).toBeInTheDocument;
    });
  });
});

afterEach(() => {
  cleanup();
});
