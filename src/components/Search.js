import {Col, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useForm} from "react-hook-form";
import SearchResults from "./SearchResults";
import {useEffect, useState} from "react";
import {ReactComponent as SearchIcon} from '../assets/icon-search.svg';
import {getProfile} from "../api/API";


const Search = () => {
    const [username, setUsername] = useState("norafergany");

    const [error, setError] = useState(false);

    const {register, handleSubmit, watch, reset, resetField, formState: {errors}} = useForm({reValidateMode: "onSubmit", });

    const [profile, setProfile] = useState({});


    const onSubmit = async (data) => {
        try {
            setUsername(data.username);
        } catch (error) {
            console.error(error);
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
                console.error(error);
                setError(true);

            }

        })().catch((error) => {
            console.error(error);
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

                                <Form.Control type="text"
                                              placeholder="Search Github username..." {...register("username", {
                                    required: true, maxLength: 39, pattern: /^[A-Za-z-0-9]+$/i
                                })}/>
                                <Button variant="primary" type="submit">
                                    Search
                                </Button>
                            </InputGroup>
                            {errors.username &&
                                <p>Github usernames can only contain hyphens and alphanumeric characters</p>}

                        </Form.Group>

                    </Form>
                </Col>

            </Row>

            <SearchResults username={username} error={error} profile={profile}/>
        </>

    )
}

export default Search;