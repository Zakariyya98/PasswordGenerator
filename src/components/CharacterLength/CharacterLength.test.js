import CharacterLength from "./CharacterLength";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

// Check if this is the correct way to cleanup after each test runs
cleanup(() => {
  return cleanup;
});

describe("Given the user is using the password generator", () => {
  describe("When the user has landed on a fresh instance of the app", () => {
    beforeEach(() => {
      render(<CharacterLength />);
    });

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
    beforeEach(() => {
      render(<CharacterLength rangeValue={8} setRangeValue={() => {}} />);
    });

    it("The user adjusts the range slider to 5", () => {
      const rangeSlider = screen.getByTestId("characterLengthRangeSlider");
      fireEvent.change(rangeSlider, { target: { value: 5 } });
      expect(rangeSlider.value).toBe("5");
    });

    it("The slider should not exceed 24", () => {
      const rangeSlider = screen.getByTestId("characterLengthRangeSlider");
      // A value of 27 is not possible so the expected value should
      // be 24 as its the max.
      fireEvent.change(rangeSlider, { target: { value: 27 } });
      expect(rangeSlider.value).toBe("24");
    });

    it("The slider should not go below 2", () => {
      const rangeSlider = screen.getByTestId("characterLengthRangeSlider");
      // A value of 1 is not possible so the expected value should
      // be 2 as its the min.
      fireEvent.change(rangeSlider, { target: { value: 1 } });
      expect(rangeSlider.value).toBe("2");
    });
  });
});
