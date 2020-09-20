import React from "react";
import {fireEvent, render} from '@testing-library/react';
import NavigationBar from "./NavigationBar";
import {StorybookRouterFix} from "../../utils/StorybookRouterFix";
import {Router} from "next/router";
import {withTestRouter} from "../../utils/TestRouter";

beforeEach(() => {
});

afterEach(() => {
});

it('create fixed navigation bar', () => {
  const { container } = render(<NavigationBar />);
  const nav = container.querySelector("nav");
  expect(nav).toBeDefined();
  expect(nav.className).toContain("is-fixed-top")
});

it('create not fixed navigation bar', () => {
  const { container } = render(<NavigationBar fixed={false} />);
  const nav = container.querySelector("nav");
  expect(nav).toBeDefined();
  expect(nav.className).not.toContain("is-fixed-top")
});

it('create navigation bar open and close menu', () => {
  const { container } = render(<NavigationBar fixed={false} />);
  const burgerButton = container.querySelector(".navbar-burger");
  const menu = container.querySelector(".navbar-menu");
  expect(burgerButton).toBeDefined();
  click(burgerButton)
  expectOpenMenu(burgerButton, menu);
  click(burgerButton);
  expectCloseMenu(menu, burgerButton);
});

it('close menu after link clicked', () => {
  const { container } = render(
    withTestRouter(<NavigationBar fixed={false} />)
  );
  const burgerButton = container.querySelector(".navbar-burger");
  const menu = container.querySelector(".navbar-menu");
  expect(burgerButton).toBeDefined();
  click(burgerButton)
  expectOpenMenu(burgerButton, menu);
  const item = menu.querySelector("a")
  click(item)
  expectCloseMenu(burgerButton, menu)
});

function expectOpenMenu(burgerButton: Element, menu: Element) {
  expect(burgerButton.className).toContain("is-active")
  expect(menu.className).toContain("is-active")
}

function expectCloseMenu(menu: Element, burgerButton: Element) {
  expect(menu.className).not.toContain("is-active")
  expect(burgerButton.className).not.toContain("is-active")
}

function click(element: Element) {
  fireEvent.click(element)
}
