import CharacterLength from "./CharacterLength";

import { render, screen, cleanup } from "@testing-library/react";

// Check if this is the correct way to cleanup after each test runs
cleanup(() => {
  return cleanup;
});

// Example of a test structure:
// Describe is for Given and Whens
// It is for then

describe("Given the user is using the password generator", () => {
  beforeEach(() => {
    render(<CharacterLength />);
  });

  it("Then the user should see the CharacterLength Component", () => {
    const characterLengthComponent = screen.getByTestId("characterLength");
    expect(characterLengthComponent).toBeInTheDocument;
  });
});
