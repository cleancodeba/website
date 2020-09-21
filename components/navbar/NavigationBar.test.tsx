import React from "react";
import {fireEvent, render} from '@testing-library/react';
import NavigationBar from "./NavigationBar";

beforeEach(() => {
});

afterEach(() => {
});

it('create fixed navigation bar', () => {
  const { container } = render(
    withTestRouter(<NavigationBar />)
  );
  const nav = container.querySelector("nav");
  expect(nav).toBeDefined();
  expect(nav.className).toContain("is-fixed-top")
});

it('create not fixed navigation bar', () => {
  const { container } = render(
    withTestRouter(<NavigationBar fixed={false} />)
  );
  const nav = container.querySelector("nav");
  expect(nav).toBeDefined();
  expect(nav.className).not.toContain("is-fixed-top")
});

it('create navigation bar open and close menu', () => {
  const { container } = render(
    withTestRouter(<NavigationBar fixed={false} />)
  );
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


import React from "react";
import { NextRouter } from "next/router";
import { RouterContext } from "next/dist/next-server/lib/router-context";

export function withTestRouter(
  tree: React.ReactElement,
  router: Partial<NextRouter> = {}
) {
  window.scrollTo = jest.fn()
  const {
    route = "",
    pathname = "",
    query = {},
    asPath = "",
    push = async () => true,
    replace = async () => true,
    reload = () => null,
    back = () => null,
    prefetch = async () => undefined,
    beforePopState = () => null,
    isFallback = false,
    events = {
      on: () => null,
      off: () => null,
      emit: () => null
    }
  } = router;

  return (
    <RouterContext.Provider
      value={{
        route,
        pathname,
        query,
        asPath,
        push,
        replace,
        reload,
        back,
        prefetch,
        beforePopState,
        isFallback,
        events
      }}
    >
      {tree}
    </RouterContext.Provider>
  );
}
