import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";


//smoke test for carousel
it("renders without crashing", function(){
  render(<Carousel />)
});

//snapshot test for carousel
it("matches snapshot", function () {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
})


it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("works when you click of left arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  //move back in carousel
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

   // expect the last image in the carousel to show
   expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
   expect(queryByAltText("Photo by Josh Post on Unsplash")).toBeInTheDocument();
})