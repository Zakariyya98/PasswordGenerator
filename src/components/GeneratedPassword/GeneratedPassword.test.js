import GeneratedPassword from "./GeneratedPassword";

import { render, screen, cleanup, fireEvent } from "@testing-library/react";

describe("Given the user is using the password generator", () => {
  describe("When the user has landed on a fresh instance of the app", () => {
    const initialState = "Select Your Options And Generate";
    beforeEach(() => {
      render(<GeneratedPassword generatedPassword={initialState} />);
    });

    it("Then the app should render with the GeneratedPassword Component visible on the page", () => {
      const generatedPasswordComponent =
        screen.getByTestId("generatedPassword");

      expect(generatedPasswordComponent).toBeInTheDocument;
    });

    it('Then the initial state "Select Your Options and Generate" should be on the screen', () => {
      const generatedPasswordField = screen.getByTestId(
        "generatedPassword-display"
      );
      expect(generatedPasswordField).toHaveTextContent(
        "Select Your Options And Generate"
      );
    });
  });

  describe("When the user has generated a password and clicks the clipboard icon", () => {
    beforeEach(() => {
      const mockClipboard = {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      };
      Object.defineProperty(window.navigator, "clipboard", {
        value: mockClipboard,
      });

      render(
        <GeneratedPassword generatedPassword={"randomlyGeneratedPassword"} />
      );
    });

    it("Then the current value should be copied to the clipboard", async () => {
      const clipboardButton = screen.getByTestId("generatedPassword-clipboard");

      fireEvent.click(clipboardButton);

      expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        "randomlyGeneratedPassword"
      );
    });
  });
});

afterEach(() => {
  cleanup();
});
