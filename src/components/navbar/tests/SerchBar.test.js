// Search Bar test.js good

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import SearchBar from '../SearcBar'

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders a blank input field", () => {
    act(() => {
        render(
            <BrowserRouter>
                <SearchBar />
            </BrowserRouter>, container
        );
    });
    expect(container.querySelector("input").textContent).toBe("");


});