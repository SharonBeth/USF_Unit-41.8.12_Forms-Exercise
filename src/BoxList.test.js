import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing-Smoke Test", function () {
    render(<BoxList />)
});

it("passes the snapshot", function () {
    const { asFragment } = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot();
})

it("should add width", function () {
    const { queryByText, getByLabelText } = render(<BoxList />);
    const input = getByLabelText("Width");
    const btn = queryByText("Add Item")
    expect(queryByText('Width: 9')).not.toBeInTheDocument();
    fireEvent.change(input, { target: { value: '9' } });
    fireEvent.click(btn);
    expect(queryByText('Width: 9')).toBeInTheDocument();
})

it("should add backgroundColor and remove it", function () {
    const { queryByText, getByLabelText } = render(<BoxList />);
    const input = getByLabelText("Background Color");
    const btn = queryByText("Add Item")
    expect(queryByText('Background Color: Green')).not.toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'Green' } });
    fireEvent.click(btn, { target: { value: "green" } });
    expect(queryByText('Background Color: Green')).toBeInTheDocument();
    const btn2 = queryByText("Remove the Box!")
    fireEvent.click(btn2)
    expect(queryByText('Background Color: Green')).not.toBeInTheDocument();


})