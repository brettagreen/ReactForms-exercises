import { render, fireEvent } from "@testing-library/react";
import ToDoForm from "./ToDoForm";

it("renders without crashing", function() {
  render(<ToDoForm />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<ToDoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("runs the create function on form submit", function() {
  const createMock = jest.fn();
  const { getByText } = render(<ToDoForm handleSubmit={createMock} />);
  const createButton = getByText("Submit");
  fireEvent.click(createButton);
  expect(createMock).toHaveBeenCalled();
});
