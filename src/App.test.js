import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Kanda Exam/i);
  expect(linkElement).toBeInTheDocument();
});

test("fireEvent changefirst name", () => {
  render(<App />);
  const linkElement = screen.getByTestId("firstName");
  fireEvent.change(linkElement, { target: { value: "abc" } });
  expect(linkElement).toBeInTheDocument();
});

test("fireEvent change Lastname", () => {
  render(<App />);
  const linkElement = screen.getByTestId("lastName");
  fireEvent.change(linkElement, { target: { value: "xyz" } });
  expect(linkElement).toBeInTheDocument();
});

test("fireEvent change email", () => {
  render(<App />);
  const linkElement = screen.getByTestId("email");
  fireEvent.change(linkElement, { target: { value: "rahul@gmail.com" } });
  expect(linkElement).toBeInTheDocument();
});

test("fireEvent change password", () => {
  render(<App />);
  const linkElement = screen.getByTestId("password");
  fireEvent.change(linkElement, { target: { value: "abc" } });
  expect(linkElement).toBeInTheDocument();
});

test("fireEvent change conf pass", () => {
  render(<App />);
  const linkElement = screen.getByTestId("confPassword");
  fireEvent.change(linkElement, { target: { value: "abc" } });
  expect(linkElement).toBeInTheDocument();
});

test("fireEvent click submit", () => {
  render(<App />);
  const linkElement = screen.getByTestId("submit-button");
  fireEvent.click(linkElement);
  expect(linkElement).toBeInTheDocument();
});
