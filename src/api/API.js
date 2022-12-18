import axios from "axios";
import format from 'date-fns/format'
import {parseISO} from "date-fns";


export const getProfile = async (props) => {
    const baseURL = "https://api.github.com/users/";
    const {username, setError} = props;

    try {
        const {data} = await axios.get(`${baseURL}${username}`, {
            auth: {
                username: "norafergany",
                password: "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"
            }
        })

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
            twitterURL: `https://twitter.com/${data.twitter_username}`,
            stringDate: format(parseISO(data.created_at), ['d MMM yyyy']),
        };
    } catch (error) {
        // Send to logging service in production
        setError(true);
        console.log("An error occurred");
    }
}
