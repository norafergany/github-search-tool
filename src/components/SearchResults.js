import {Col, Row} from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import {ReactComponent as TwitterIcon} from '../assets/icon-twitter.svg';
import {ReactComponent as CompanyIcon} from '../assets/icon-company.svg';
import {ReactComponent as LocationIcon} from '../assets/icon-location.svg';
import {ReactComponent as WebsiteIcon} from '../assets/icon-website.svg';


const SearchResults = (props) => {

    const {profile, username, error} = props;

    if (error) {
        return (
            <p>No results, try again</p>
        )
    }
    return (<>
            <Row className="search-results py-5 my-3 rounded ">

                <Col xs={3} className="d-flex justify-content-center">
                    <Image className="avatar" src={profile?.avatar_url} alt="avatar" roundedCircle fluid/>
                </Col>

                <Col xs={9} className="">
                    <Row className=" mx-2">
                        <Col className="">
                            <div><h1>{profile?.name}</h1></div>
                            <div><a target="_blank" rel="noreferrer"
                                    href={profile?.githubURL}>{`@${username}`}</a></div>
                        </Col>
                        <Col className="col-auto">
                            {profile?.stringDate ? `Joined ${profile?.stringDate}` : ""}
                        </Col>
                    </Row>
                    <Row className=" mx-2">
                        <Col>
                            {profile?.bio ?? "This profile has no bio"}
                        </Col>
                    </Row>
                    <Row className=" mx-2">
                        <Col>
                            <div>Repos</div>
                            <div data-testid="repos">
                                {profile?.public_repos}
                            </div>

                        </Col>
                        <Col>
                            <div>Followers</div>
                            <div data-testid="followers">
                                {profile?.followers}
                            </div>

                        </Col>
                        <Col>
                            <div>Following</div>
                            <div data-testid="following">
                                {profile?.following}
                            </div>
                        </Col>
                    </Row>
                    <Row className="mx-2 gy-2">
                        <Col>
                            <div>
                                <LocationIcon className="info-icon"/>
                                <span data-testid="location">
                                    {profile?.location ?? "Not Available"}}
                                </span>
                            </div>
                            <div data-testid="blog">
                                <WebsiteIcon className="info-icon"/>
                                {profile?.blog ? <a rel="noreferrer" target="_blank"
                                                    href={profile?.blog}>{profile?.blog}</a> : "Not Available"}
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <TwitterIcon className="info-icon"/>
                                {profile?.twitter_username ? <a target="_blank" rel="noreferrer"
                                                                href={profile?.twitterURL}>{profile?.twitter_username}</a> : "Not Available"}
                            </div>
                            <div>
                                <CompanyIcon className="info-icon"/>
                                {profile?.company ? <a target="_blank" rel="noreferrer"
                                                       href={profile?.companyURL}>{profile?.company}</a> : "Not Available"}
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>

    )
}

export default SearchResults;