import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from '../SearcBar';


test("renders the search bar", () => {
    render(
        <BrowserRouter>
            <SearchBar />
        </BrowserRouter>
    );

    const inputNode = screen.getByRole('textbox');
    expect(inputNode).toBeInTheDocument();
});

test("serch bar renders with a placeholder correcly", () => {
    render(
        <BrowserRouter>
            <SearchBar placeholder="Search Destination..." />
        </BrowserRouter>
    );

    const inputNode = screen.getByPlaceholderText("Search Destination...")
    expect(inputNode).toBeInTheDocument();
});

test("serch bar is empty when renderded", () => {
    render(
        <BrowserRouter>
            <SearchBar />
        </BrowserRouter>
    );

    const inputNode = screen.getByRole("textbox");
    const balnkInput = "";
    expect(inputNode.textContent).toBe(balnkInput);
});

test("serch bar should have some text when typed in", () => {
    render(
        <BrowserRouter>
            <SearchBar />
        </BrowserRouter>
    );

    const inputNode = screen.getByRole("textbox");
    const destinationInput = "Grand Canyon";
    fireEvent.change(inputNode, { target: { value: destinationInput } });

    expect(inputNode.value).toBe(destinationInput);
});

test("serch icon is visibale when there is no input text", () => {
    render(
        <BrowserRouter>
            <SearchBar />
        </BrowserRouter>
    );

    const searchIcon = screen.getByTestId("search-icon");
    expect(searchIcon).toBeVisible();
});

test("serch icon should NOT be visible when there is input text", () => {
    render(
        <BrowserRouter>
            <SearchBar />
        </BrowserRouter>
    );

    const inputNode = screen.getByRole("textbox");
    const searchIcon = screen.getByTestId("search-icon");
    const textInput = "Grand Canyon";

    fireEvent.change(inputNode, { target: { value: textInput } });

    expect(searchIcon).not.toBeVisible();
});

test("cancel icon should be visibale when there is text input", () => {
    render(
        <BrowserRouter>
            <SearchBar />
        </BrowserRouter>
    );

    const inputNode = screen.getByRole("textbox");
    const cancelIcon = screen.getByTestId("cancel-icon");
    const textInput = "Grand Canyon";

    fireEvent.change(inputNode, { target: { value: textInput } });

    expect(cancelIcon).toBeVisible();
});

test("cancel icon should NOT be visibale without text input", () => {
    render(
        <BrowserRouter>
            <SearchBar />
        </BrowserRouter>
    );

    const cancelIcon = screen.getByTestId("cancel-icon");
    expect(cancelIcon).not.toBeVisible();
});

test("cancel icon should vanish if clicked", () => {
    render(
        <BrowserRouter>
            <SearchBar />
        </BrowserRouter>
    );

    const inputNode = screen.getByRole("textbox");
    const cancelIcon = screen.getByTestId("cancel-icon");
    const textInput = "Grand Canyon";

    fireEvent.change(inputNode, { target: { value: textInput } });
    fireEvent.click(cancelIcon);

    expect(cancelIcon).not.toBeVisible();
});

test("search icon apper after clicking cancel icon", () => {
    render(
        <BrowserRouter>
            <SearchBar />
        </BrowserRouter>
    );

    const inputNode = screen.getByRole("textbox");
    const cancelIcon = screen.getByTestId("cancel-icon");
    const textInput = "Grand Canyon";
    const searchIcon = screen.getByTestId("search-icon");

    fireEvent.change(inputNode, { target: { value: textInput } });
    fireEvent.click(cancelIcon);

    expect(searchIcon).toBeVisible();
});

test("search results should be visibale with text input", () => {
    render(
        <BrowserRouter>
            <SearchBar />
        </BrowserRouter>
    );

    const inputNode = screen.getByRole("textbox");
    const searchResults = screen.getByTestId("search-results");
    const textInput = "Grand Canyon";

    fireEvent.change(inputNode, { target: { value: textInput } });
    expect(searchResults).toBeVisible();
});

test("search results should NOT be visibale without text input", () => {
    render(
        <BrowserRouter>
            <SearchBar />
        </BrowserRouter>
    );

    const searchResults = screen.getByTestId("search-results");
    expect(searchResults).not.toBeVisible();
});

test("search resutls should vanish after clicking cancel icon", () => {
    render(
        <BrowserRouter>
            <SearchBar />
        </BrowserRouter>
    );

    const inputNode = screen.getByRole("textbox");
    const cancelIcon = screen.getByTestId("cancel-icon");
    const searchResults = screen.getByTestId("search-results");

    const textInput = "Grand Canyon";

    fireEvent.change(inputNode, { target: { value: textInput } });
    fireEvent.click(cancelIcon);

    expect(searchResults).not.toBeVisible();
});