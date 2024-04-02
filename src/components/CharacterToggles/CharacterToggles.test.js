import CharacterToggles from "./CharacterToggles";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

describe("Given the user is using the password generator", () => {
  describe("When the user has landed on a fresh instance of the app", () => {
    beforeEach(() => {
      render(<CharacterToggles />);
    });

    it("Then the user should see the CharacterToggles component", () => {
      const characterTogglesComponent = screen.getByTestId("characterToggles");
      expect(characterTogglesComponent).toBeInTheDocument;
    });

    it("Then the Uppercase checkbox should not be checked", () => {
      const characterToggleCheckboxUpper = screen.getByTestId(
        "characterTogglesCheckbox--Uppercase"
      );
      expect(characterToggleCheckboxUpper).not.toBeChecked();
    });
    it("Then the Lowercase checkbox should not be checked", () => {
      const characterToggleCheckboxLower = screen.getByTestId(
        "characterTogglesCheckbox--Lowercase"
      );
      expect(characterToggleCheckboxLower).not.toBeChecked();
    });

    it("Then the Numbers checkbox should not be checked", () => {
      const characterToggleCheckboxNumber = screen.getByTestId(
        "characterTogglesCheckbox--Numbers"
      );
      expect(characterToggleCheckboxNumber).not.toBeChecked();
    });

    it("Then the Symbols checkbox should not be checked", () => {
      const characterToggleCheckboxSymbol = screen.getByTestId(
        "characterTogglesCheckbox--Symbols"
      );
      expect(characterToggleCheckboxSymbol).not.toBeChecked();
    });
  });

  describe("Given the user wants to select a set of characters", () => {
    beforeEach(() => {
      render(<CharacterToggles />);
    });

    describe("When the user checks the Uppercase box", () => {
      it("Then the box should be checked", () => {
        const characterToggleCheckboxUpper = screen.getByTestId(
          "characterTogglesCheckbox--Uppercase"
        );
        fireEvent.change(characterToggleCheckboxUpper, {
          target: { checked: true },
        });
        expect(characterToggleCheckboxUpper).toBeChecked();
      });
    });

    describe("When the user checks the Lowercase box", () => {
      it("Then the box should be checked", () => {
        const characterToggleCheckboxLower = screen.getByTestId(
          "characterTogglesCheckbox--Lowercase"
        );
        fireEvent.change(characterToggleCheckboxLower, {
          target: { checked: true },
        });
        expect(characterToggleCheckboxLower).toBeChecked();
      });
    });

    describe("When the user checks the Numbers box", () => {
      it("Then the box should be checked", () => {
        const characterToggleCheckboxNumber = screen.getByTestId(
          "characterTogglesCheckbox--Numbers"
        );
        fireEvent.change(characterToggleCheckboxNumber, {
          target: { checked: true },
        });
        expect(characterToggleCheckboxNumber).toBeChecked();
      });
    });

    describe("When the user checks the Symbols box", () => {
      it("Then the box should be checked", () => {
        const characterToggleCheckboxSymbol = screen.getByTestId(
          "characterTogglesCheckbox--Symbols"
        );
        fireEvent.change(characterToggleCheckboxSymbol, {
          target: { checked: true },
        });
        expect(characterToggleCheckboxSymbol).toBeChecked();
      });
    });
  });
});

afterEach(() => {
  cleanup();
});
