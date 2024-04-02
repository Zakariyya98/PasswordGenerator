import GenerateButton from "./GenerateButton";

import { render, screen, cleanup, fireEvent } from "@testing-library/react";

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

  describe("When the user has all the character sets selected and a characterLength of 8", () => {
    it("Then the generated password should have 8 characters and at least 1 character from each character set", () => {
      const setChars = {
        Uppercase: "QWERTYUIOPASDFGHJKLZXCVBNM",
        Lowercase: "qwertyuiopasdfghjklzxcvbnm",
        Numbers: "1234567890",
        Symbols: "!@£$%^&*()_-+=:;<>",
      };

      const setGeneratedPasswordMock = jest.fn();

      render(
        <GenerateButton
          charLength={8}
          setChars={setChars}
          setGeneratedPassword={setGeneratedPasswordMock}
        />
      );

      const generateButton = screen.getByRole("button", {
        name: /generate password/i,
      });

      fireEvent.click(generateButton);
      expect(setGeneratedPasswordMock).toHaveBeenCalledTimes(1);
      expect(setGeneratedPasswordMock).toHaveBeenCalledWith(expect.any(String));
      expect(setGeneratedPasswordMock.mock.calls[0][0]).toHaveLength(8);
    });
  });
});

afterEach(() => {
  cleanup();
});
