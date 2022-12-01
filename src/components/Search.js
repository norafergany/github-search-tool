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

    const {register, handleSubmit, reset, formState: {errors}} = useForm({reValidateMode: "onChange", });

    const [profile, setProfile] = useState({});


    const onSubmit = async (data) => {
        try {
            setUsername(data.username);
        } catch (error) {
            // Send to logging service in production
            setError(true);

        }
        reset({})
        reset({username:''});
        setError(false);

    };


    useEffect(() => {

        (async () => {
            try {
                const currentProfile = await getProfile({username, setError});
                setProfile(currentProfile);
            } catch (error) {
                // Send to logging service in production
                setError(true);

            }

        })().catch((error) => {
            // Send to logging service in production
            setError(true);

        })

    }, [username])


    return (<>

            <Row className="search-box rounded">
                <Col>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label></Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><SearchIcon/></InputGroup.Text>

                                <Form.Control role="search" name="username" type="text"
                                               placeholder="Search Github username..." {...register("username", {
                                    required: true, maxLength: 39, pattern: /^[A-Za-z-0-9]+$/i
                                })}/>
                                <Button variant="primary" type="submit" name="search">
                                    Search
                                </Button>
                            </InputGroup>
                            {errors.username &&
                                <div role="alert">Github usernames can only contain hyphens and alphanumeric characters</div>}

                        </Form.Group>

                    </Form>
                </Col>

            </Row>

            <SearchResults username={username} error={error} profile={profile}/>
        </>

    )
}

export default Search;