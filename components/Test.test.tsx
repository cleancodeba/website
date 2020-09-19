import React from "react";
import { render } from '@testing-library/react';
import {Test} from "./Test";

it('create button with title', () => {
  const title = "Es un test Component";
  const { container } = render(<Test />);
  const button = container.querySelector("h1");
  expect(button?.innerHTML).toBe(title);
});
