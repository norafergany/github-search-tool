import {
    cleanup, render, screen,
} from "@testing-library/react";

import * as api from "../api/API.js";
import SearchResults from "./SearchResults";


jest.mock("../api/API.js")
afterEach(cleanup);

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

    api.getProfile.mockResolvedValueOnce(defaultProfile);
    render(<SearchResults/>);
    const matched = await screen.findByText(/Nora Fergany/);
    expect(matched).toBeInTheDocument();

    const image = await screen.getByAltText('avatar');
    expect(image.src).toContain('https://avatars.githubusercontent.com/u/25270812?v=4');

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