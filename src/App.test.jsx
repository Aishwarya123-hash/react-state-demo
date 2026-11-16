import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.jsx";

test("broken counter does not update the screen", async () => {
  render(<App />);
  const user = userEvent.setup();
  const section = screen.getByRole("heading", { name: "Broken counter" }).parentElement;
  await user.click(section.querySelector("button"));
  expect(section.textContent).toContain("Count: 0");
});

test("counter adds, subtracts, resets", async () => {
  render(<App />);
  const user = userEvent.setup();
  const section = screen.getByRole("heading", { name: "Counter" }).parentElement;
  const [add, sub, reset] = section.querySelectorAll("button");
  await user.click(add); await user.click(add);
  expect(section.textContent).toContain("Count: 2");
  await user.click(sub);
  expect(section.textContent).toContain("Count: 1");
  await user.click(reset);
  expect(section.textContent).toContain("Count: 0");
});

test("mirror follows typing", async () => {
  render(<App />);
  const user = userEvent.setup();
  await user.type(screen.getByPlaceholderText("Type your name"), "Zoya");
  expect(screen.getByText("Hello, Zoya!")).toBeTruthy();
});

test("name list adds names, ignores blank, clears box", async () => {
  render(<App />);
  const user = userEvent.setup();
  const box = screen.getByPlaceholderText("New name");
  const addBtn = screen.getByRole("button", { name: "Add" });
  expect(screen.getByText("Total names: 3")).toBeTruthy();
  await user.click(addBtn);
  expect(screen.getByText("Total names: 3")).toBeTruthy();
  await user.type(box, "Meena");
  await user.click(addBtn);
  expect(screen.getByText("Total names: 4")).toBeTruthy();
  expect(screen.getByText("Hello, Meena!")).toBeTruthy();
  expect(box.value).toBe("");
});
