import React from "react";
import {fireEvent, render} from '@testing-library/react';
import InformationSection, {InformationSectionProps} from "./InformationSection";

beforeEach(() => {
});

afterEach(() => {
});

it('create information section', () => {
  const props: InformationSectionProps = {
    title: "Events",
    description: "Hacemos eventos buenisimos",
    buttonTitle: "Enter!",
    image: "events.png",
    link: "https://www.cleancodeba.org"
  }
  const { container } = render(<InformationSection
    {...props}
  />);
  expect(container.querySelector("h1")).toHaveTextContent(props.title);
  expect(container.querySelector("p")).toHaveTextContent(props.description);
  expect(container.querySelector("a")).toHaveTextContent(props.buttonTitle);
  expect(container.querySelector("img").src).toContain(props.image);
});

it('button link action', () => {
  const props: InformationSectionProps = {
    title: "Events",
    description: "Hacemos eventos bunisimos",
    buttonTitle: "Enter!",
    image: "events.png",
    link: "https://www.cleancodeba.org"
  }
  const { container } = render(<InformationSection
    {...props}
  />);
  const button = container.querySelector("button")
  expect(button).toBeDefined()
});
