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

  it("generates a password with specified length when clicked", () => {
    const setChars = {
      lowerCase: false,
      upperCase: false,
      numbers: false,
      symbols: false,
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

    console.log("Calls:", setGeneratedPasswordMock.mock.calls);
    console.log(
      "Generated Password:",
      setGeneratedPasswordMock.mock.calls[0][0]
    );

    expect(setGeneratedPasswordMock).toHaveBeenCalledTimes(1);
    expect(setGeneratedPasswordMock).toHaveBeenCalledWith(expect.any(String));
    expect(setGeneratedPasswordMock.mock.calls[0][0]).toHaveLength(8);
  });
});

afterEach(() => {
  cleanup();
});
