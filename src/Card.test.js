import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

//smoke test for Card
it("renders without crashing", function(){
    render(<Card />)
});

//snapshot test for Card

it("matches snapshot", function () {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});