import { render, fireEvent } from "@testing-library/react";
import  ToDoList  from './ToDoList';
import { setLocalStorage } from "./ToDoList";

function addTodo(todoList, task) {
  const taskInput = todoList.getByTestId('task-input');
  fireEvent.change(taskInput, { target: { value: task }});
  const submitButton = todoList.getByText("Submit");
  fireEvent.click(submitButton);
}

it("renders without crashing", function() {
  render(<ToDoList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<ToDoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a todo", function() {
  const list = render(<ToDoList />);
  addTodo(list, 'sleep');

  // expect form to clear and todo to be on the page
  expect(list.getByTestId('task-input')).toHaveValue("");
  expect(list.getByText("sleep")).toBeInTheDocument();
  expect(list.getByText("Edit")).toBeInTheDocument();
  expect(list.getByText("X")).toBeInTheDocument();

  setLocalStorage('itemsArray', []);
});

it("can edit a todo", function() {
  const list = render(<ToDoList />);
  addTodo(list, 'carouse');

  fireEvent.click(list.getByText("Edit"));
  const editInput = list.getByDisplayValue('carouse');
  fireEvent.change(editInput, { target: { value: "drink" }});
  fireEvent.click(list.getByText("Update"));

  // expect only edited todo to appear
  expect(list.getByText("drink")).toBeInTheDocument();
  expect(list.queryByText("carouse")).not.toBeInTheDocument();
  
  setLocalStorage('itemsArray', []);
});

it("can delete a todo", function() {
  const list = render(<ToDoList />);
  addTodo(list, 'jobz');

  expect(list.queryByText("jobz")).toBeInTheDocument();

  fireEvent.click(list.getByText("X"));
  // expect todo to be gone
  expect(list.queryByText("jobz")).not.toBeInTheDocument();
});
