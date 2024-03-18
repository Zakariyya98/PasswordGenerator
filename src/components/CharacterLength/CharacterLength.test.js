import CharacterLength from "./CharacterLength";
import { render, screen, cleanup } from "@testing-library/react";

// Check if this is the correct way to cleanup after each test runs
cleanup(() => {
  return cleanup;
});

describe("Given the user is using the password generator", () => {
  beforeEach(() => {
    render(<CharacterLength />);
  });

  describe("When the user has landed on a fresh instance of the app", () => {
    it("Then the user should see the CharacterLength Component", () => {
      const characterLengthComponent = screen.getByTestId("characterLength");
      expect(characterLengthComponent).toBeInTheDocument;
    });

    it("Then the default rangeValue should be set to 8", () => {
      const rangeSlider = screen.getByTestId("characterLengthRangeSlider");
      const rangeSliderValue = rangeSlider.getAttribute("value");
      expect(rangeSliderValue).toBe("8");
    });
  });

  describe("When the user is adjusting the range slider", () => {
    it("The slider should not be able to be lower than 2", () => {
      const rangeSlider = screen.getByTestId("characterLengthRangeSlider");
      const rangeSliderValue = rangeSlider.getAttribute("min");
      expect(rangeSliderValue).toBe("2");
    });

    it("The slider should not be able to exceed 24", () => {
      const rangeSlider = screen.getByTestId("characterLengthRangeSlider");
      const rangeSliderValue = rangeSlider.getAttribute("max");
      expect(rangeSliderValue).toBe("24");
    });
  });
});
