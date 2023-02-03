import {Col, Row, Stack} from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import {ReactComponent as TwitterIcon} from '../assets/icon-twitter.svg';
import {ReactComponent as CompanyIcon} from '../assets/icon-company.svg';
import {ReactComponent as LocationIcon} from '../assets/icon-location.svg';
import {ReactComponent as WebsiteIcon} from '../assets/icon-website.svg';


const SearchResults = (props) => {
    // TODO fix the search bar border, check dark mode, fix font colors, transparency on unavailable info and icons
    const {profile, username, error} = props;

    return (<>
            {!error &&
                <Row className="search-results rounded my-2 py-4 px-4">
                    <Col xs={2} className="text-center">
                        <Image className="avatar" src={profile?.avatar_url} alt="avatar" roundedCircle fluid/>
                    </Col>
                    <Col>
                        <Row>
                            <Col >
                                <div><h1>{profile?.name}</h1></div>
                                <div><a target="_blank" rel="noreferrer" href={profile?.githubURL}>{`@${username}`}</a></div>
                                <div className="pt-2 pb-4">{profile?.bio ?? "This profile has no bio"}</div>
                            </Col>
                            <Col className="col-auto">
                                {profile?.stringDate ? `Joined ${profile?.stringDate}` : ""}
                            </Col>
                        </Row>
                        <Row className="stats rounded py-2">
                            <Col>
                                <div>
                                    <div>Repos</div>
                                    <div data-testid="repos">
                                        <h3>{profile?.public_repos}
                                        </h3>
                                    </div>
                                </div>
                            </Col>

                            <Col>
                                <div>
                                    <div>Followers</div>
                                    <div data-testid="followers">
                                        <h3>{profile?.followers}</h3>

                                    </div>
                                </div>
                            </Col>

                            <Col className="col-auto">
                                <div>
                                    <div>Following</div>
                                    <div data-testid="following">
                                        <h3>{profile?.following}</h3>

                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="py-3">
                            <Col>
                                <LocationIcon className="info-icon me-1"/>
                                <span data-testid="location">
                                    {profile?.location ?? "Not Available"}
                                </span>
                            </Col>

                            <Col>
                                <TwitterIcon className="info-icon me-1"/>
                                <span>
                                      {profile?.twitter_username ? <a target="_blank" rel="noreferrer"
                                                                      href={profile?.twitterURL}>{profile?.twitter_username}</a> : "Not Available"}
                                </span>
                            </Col>

                        </Row>

                        <Row>
                            <Col>
                                <WebsiteIcon className="info-icon me-1"/>
                                <span>
                                    {profile?.blog ? <a rel="noreferrer" target="_blank"
                                                        href={profile?.blog}>{profile?.blog}</a> : "Not Available"}
                                </span>
                            </Col>

                            <Col>
                                <CompanyIcon className="info-icon me-1"/>
                                <span>
                                       {profile?.company ? <a target="_blank" rel="noreferrer"
                                                              href={profile?.companyURL}>{profile?.company}</a> : "Not Available"}
                                </span>
                            </Col>
                        </Row>

                    </Col>


                    {/*<Row >*/}
                    {/*    <Col xs={1} className="d-flex justify-content-center px-1">*/}
                    {/*        <Image className="avatar" src={profile?.avatar_url} alt="avatar" roundedCircle fluid/>*/}
                    {/*    </Col>*/}
                    {/*    <Col className="">*/}
                    {/*        <div><h1>{profile?.name}</h1></div>*/}
                    {/*        <div><a target="_blank" rel="noreferrer"*/}
                    {/*                href={profile?.githubURL}>{`@${username}`}</a></div>*/}
                    {/*        <div>          {profile?.bio ?? "This profile has no bio"}*/}
                    {/*        </div>*/}
                    {/*    </Col>*/}
                    {/*    <Col className="col-auto px-2">*/}
                    {/*        {profile?.stringDate ? `Joined ${profile?.stringDate}` : ""}*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    {/*<Row>*/}
                    {/*    <Row className="">*/}
                    {/*        <Col xs={1}>*/}

                    {/*        </Col>*/}
                    {/*        <Col>*/}
                    {/*            <div>*/}
                    {/*                <div>Repos</div>*/}
                    {/*                <div data-testid="repos">*/}
                    {/*                    {profile?.public_repos}*/}
                    {/*                </div>*/}
                    {/*            </div>*/}

                    {/*        </Col>*/}
                    {/*        <Col>*/}
                    {/*            <div>*/}
                    {/*                <div>Followers</div>*/}
                    {/*                <div data-testid="followers">*/}
                    {/*                    {profile?.followers}*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </Col>*/}
                    {/*        <Col className="col-auto">*/}
                    {/*            <div>*/}
                    {/*                <div>Following</div>*/}
                    {/*                <div data-testid="following">*/}
                    {/*                    {profile?.following}*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*    <Row>*/}
                    {/*        <Col xs={1}>*/}

                    {/*        </Col>*/}
                    {/*        <Col >*/}
                    {/*            <LocationIcon className="info-icon"/>*/}
                    {/*            <span data-testid="location">*/}
                    {/*                {profile?.location ?? "Not Available"}*/}
                    {/*            </span>*/}
                    {/*        </Col>*/}

                    {/*        <Col className="col-auto"   >*/}
                    {/*            <TwitterIcon className="info-icon"/>*/}
                    {/*            <span>*/}
                    {/*                  {profile?.twitter_username ? <a target="_blank" rel="noreferrer"*/}
                    {/*                                                  href={profile?.twitterURL}>{profile?.twitter_username}</a> : "Not Available"}*/}
                    {/*            </span>*/}
                    {/*        </Col>*/}


                    {/*    </Row>*/}

                    {/*    <Row>*/}
                    {/*        <Col xs={1}>*/}

                    {/*        </Col>*/}
                    {/*        <Col>*/}
                    {/*            <WebsiteIcon className="info-icon"/>*/}
                    {/*            <span>*/}
                    {/*                {profile?.blog ? <a rel="noreferrer" target="_blank"*/}
                    {/*                                    href={profile?.blog}>{profile?.blog}</a> : "Not Available"}*/}
                    {/*            </span>*/}
                    {/*        </Col>*/}

                    {/*        <Col className="col-auto">*/}
                    {/*            <CompanyIcon className="info-icon"/>*/}
                    {/*            <span>*/}
                    {/*                   {profile?.company ? <a target="_blank" rel="noreferrer"*/}
                    {/*                                          href={profile?.companyURL}>{profile?.company}</a> : "Not Available"}*/}
                    {/*            </span>*/}
                    {/*        </Col>*/}


                    {/*    </Row>*/}

                    {/*</Row>*/}
                </Row>
            }


        </>
    )
}


export default SearchResults;