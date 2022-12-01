import {fireEvent, render, screen,} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import Search from "./Search"

jest.mock("../api/API.js");

let mockSearch;
beforeEach(() => {
    mockSearch = jest.fn((username) => {
        return Promise.resolve({username})
    })
})

it("prevents submission of empty usernames", async () => {
    const getProfile = jest.fn();
    const setProfile = jest.fn();

    await act(async () => {
        render(<Search getProfile={getProfile} setProfile={setProfile}/>);
        fireEvent.submit(screen.getByRole("search", { name: /search/i }));
    });
    fireEvent.submit(screen.getByRole("button", { name: /search/i }));

    expect(getProfile).not.toBeCalled();


})


it("prevents submission of Github usernames with invalid characters", async () => {
    const getProfile = jest.fn();
    const setProfile = jest.fn();
    await act(async () => {
        render(<Search getProfile={getProfile} setProfile={setProfile}/>);
    });

    const errorMessage = "Github usernames can only contain hyphens and alphanumeric characters";
    screen.debug();
    fireEvent.input(screen.getByRole("search", { }), {
        target: {
            value: "hello;world"
        }
    });

    fireEvent.submit(screen.getByRole("button", { name: /search/i }));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
    expect(mockSearch).not.toBeCalled();

    const errorElem = await screen.getByRole("alert")
    expect(errorElem).toBeInTheDocument();
    expect(errorElem).toHaveTextContent(errorMessage);
})