import {
    cleanup, render, screen,
} from "@testing-library/react";

import * as api from "../api/API.js";
import SearchResults from "./SearchResults";
import {act} from "react-dom/test-utils";


jest.mock("../api/API.js")

it("Display nora's profile when component mounts", async () => {

    const noBioText = "This profile has no bio";
    const nullText = "Not Available"

    const defaultUsername = "norafergany";
    const defaultProfile = {
        avatar_url: "https://avatars.githubusercontent.com/u/25270812?v=4",
        html_url: "https://github.com/norafergany",
        name: "Nora Fergany",
        company: null,
        blog: "http://norafergany.com/",
        location: "Pittsburgh, PA",
        bio: null,
        twitter_username: null,
        public_repos: 7,
        followers: 1,
        following: 7,
        created_at: "2017-01-21T19:55:06Z",
        githubURL:`https://github.com/${defaultUsername}`,
        companyURL:null,
        twitterURL: null,
        stringDate: "21 Jan 2017",
    };

    await act(() => {
        render(<SearchResults profile={defaultProfile} username={defaultUsername}
                              error={false}
        />)
    })

    const githubName = await screen.findByText(/Nora Fergany/);
    expect(githubName).toBeInTheDocument();

    const image = await screen.getByAltText('avatar');
    expect(image.src).toContain(`${defaultProfile.avatar_url}`);

    expect(screen.getByText(noBioText).toBeInTheDocument);
    expect(document.querySelector("a").getAttribute("href")).toBe(defaultProfile.html_url);

    const nullValues = screen.getAllByText(nullText);
    expect(nullValues).toHaveLength(2);

    const blogDiv = screen.getByTestId("blog");
    expect(blogDiv).toHaveTextContent(defaultProfile.blog);

    const location = await screen.getByTestId("location");
    expect(location).toHaveTextContent(defaultProfile.location);

    const repos = await screen.getByTestId("repos");
    expect(repos).toHaveTextContent(defaultProfile.public_repos);

    const followers = await screen.getByTestId("followers");
    expect(followers).toHaveTextContent(defaultProfile.followers);

    const following = await screen.getByTestId("following");
    expect(following).toHaveTextContent(defaultProfile.following);

})

it("Displays the error message when the username doesn't exist", async() => {

    const notFoundUser = "abdhgdsgfhds";

    await act(() => {
        render(<SearchResults profile={undefined} username={notFoundUser}
                              error={true}
        />)
    })
    const errorMessage = await screen.findByText(/No results/i);
    expect(errorMessage).toBeInTheDocument();
})

it("Display the username's Github profile when someone makes a search", async () => {

    const noBioText = "This profile has no bio";
    const nullText = "Not Available"

    const octocatUsername = "octocat";
    const octocatProfile = {
        avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
        html_url: "https://github.com/octocat",
        name: "The Octocat",
        company: "@github",
        blog: "https://github.blog",
        location: "San Francisco",
        bio: null,
        twitter_username: null,
        public_repos: 8,
        followers: 7670,
        following: 9,
        created_at: "2011-01-25T18:44:36Z",
        githubURL:`https://github.com/${octocatUsername}`,
        companyURL:"https://github.com/github",
        twitterURL: null,
        stringDate: "25 Jan 2011",
    };

    await act(() => {
        render(<SearchResults profile={octocatProfile} username={octocatUsername}
                              error={false}
        />)
    })

    const githubName = await screen.findByText(`${octocatProfile.name}`);
    expect(githubName).toBeInTheDocument();

    const image = await screen.getByAltText('avatar');
    expect(image.src).toContain(`${octocatProfile.avatar_url}`);

    expect(screen.getByText(noBioText).toBeInTheDocument);
    expect(document.querySelector("a").getAttribute("href")).toBe(octocatProfile.html_url);

    const nullValues = screen.getAllByText(nullText);
    expect(nullValues).toHaveLength(1);

    const blogDiv = screen.getByTestId("blog");
    expect(blogDiv).toHaveTextContent(`${octocatProfile.blog}`);

    const location = await screen.getByTestId("location");
    expect(location).toHaveTextContent(octocatProfile.location);

    const repos = await screen.getByTestId("repos");
    expect(repos).toHaveTextContent(octocatProfile.public_repos);

    const followers = await screen.getByTestId("followers");
    expect(followers).toHaveTextContent(octocatProfile.followers);

    const following = await screen.getByTestId("following");
    expect(following).toHaveTextContent(octocatProfile.following);
})