import GenerateButton from "./GenerateButton";

import { render, screen, cleanup } from "@testing-library/react";

describe("Given the user is using the password generator", () => {
  describe("When the user has landed on a fresh instance of the app", () => {
    beforeEach(() => {
      render(<GenerateButton />);
    });

    it("Then the app should render with the GenerateButton visible on the page", () => {
      const generateButtonComponent = screen.getByTestId("generateButton");
      expect(generateButtonComponent).toBeInTheDocument;
    });
  });
});

afterEach(() => {
  cleanup();
});
