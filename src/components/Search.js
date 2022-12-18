import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {Col, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchResults from "./SearchResults";
import {getProfile} from "../api/API";
import {ReactComponent as SearchIcon} from '../assets/icon-search.svg';


const Search = () => {
    const [username, setUsername] = useState("norafergany");

    const [error, setError] = useState(false);

    const {register, handleSubmit, reset, formState: {errors, isDirty}} = useForm({reValidateMode: "onChange", defaultValues: { username: "norafergany" }}, );

    const [profile, setProfile] = useState({});

    const onSubmit = async (data) => {
        try {
            setError(false);
            setUsername(data.username);
        } catch (error) {
            // Send to logging service in production
            console.log('test');

            setError(true);

        }
        reset({})
    };


    useEffect(() => {

        (async () => {
            const currentProfile = await getProfile({username, setError});
            setProfile(currentProfile);

        })()

    }, [username])



    return (<>

            <Row className="search-box rounded">
                <Col>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label></Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><SearchIcon/></InputGroup.Text>

                                <Form.Control  className="search-input" role="search" name="username" type="text"
                                              placeholder="Search Github username..." {...register("username", {
                                    required: true, maxLength: 39, pattern: {value:/^[A-Za-z-0-9]+$/i, message:"Github usernames contain only alpha numeric characters"},
                                })}
                                />
                                <InputGroup.Text id="error-message">{(error && !isDirty) ? "No results..." : ""}</InputGroup.Text>
                                <Button variant="primary" type="submit" name="search">
                                    Search
                                </Button>
                            </InputGroup>
                            {errors.username && errors.username.type === "pattern" &&
                                <div role="alert">{errors.username.message}</div>
                            }

                        </Form.Group>

                    </Form>
                </Col>

            </Row>

            <SearchResults username={username} error={error} profile={profile}/>
        </>

    )
}

export default Search;