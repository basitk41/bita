import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app component", () => {
  render(<App />);
  const helloElement = screen.getByText(/Homepage/i);
  expect(helloElement).toBeInTheDocument();
});
