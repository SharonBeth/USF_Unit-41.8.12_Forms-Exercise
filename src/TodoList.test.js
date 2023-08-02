import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing-Smoke Test", function () {
    render(<TodoList />)
});

// it("passes the snapshot test", function () {
// const { asFragment } = render(<TodoList />)
// expect(asFragment()).toMatchSnapshot();
// });

it("should add a todo Item", function () {
    const { queryByText, getByText, getByLabelText } = render(<TodoList />);
    const input = getByLabelText("Task:")
    const btn = queryByText("Add a todo!")
    expect(getByText("feed cats")).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: "feed cats" } });
    fireEvent.click(btn);
    const { asFragment } = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot();

    expect(queryByText("Task:feed cats")).toBeInTheDocument();
})