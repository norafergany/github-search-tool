import axios from "axios";
import format from 'date-fns/format'
import {parseISO} from "date-fns";


export const getProfile = async (username) => {
    const baseURL = "https://api.github.com/users/";

    try {
        const {data} = await axios.get(`${baseURL}${username}`);
        console.log(data);

        const twitterURL = `https://twitter.com/${data.twitter_username}`;
        const stringDate = format(parseISO(data.created_at), ['d MMM yyyy']);


        return {
            avatar_url: data.avatar_url,
            html_url: data.html_url,
            name: data.name,
            company: data.company,
            blog: data.blog,
            location: data.location,
            bio: data.bio,
            twitter_username: data.twitter_username,
            public_repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            created_at: data.created_at,
            githubURL: `https://github.com/${username}`,
            companyURL: `https://github.com/${data.company}`.replace("@", ""),
            twitterURL: twitterURL,
            stringDate: stringDate,
        };
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}
