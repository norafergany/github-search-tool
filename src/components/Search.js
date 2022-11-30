import {Col, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useForm} from "react-hook-form";
import SearchResults from "./SearchResults";
import {useState} from "react";
import {ReactComponent as SearchIcon} from '../assets/icon-search.svg';


const Search = () => {
    const [username, setUsername] = useState("norafergany");

    const {register, handleSubmit, watch, formState: {errors}} = useForm({reValidateMode: "onSubmit"});

    const onSubmit = async (data) => {
        console.log(data);
        try {
            setUsername(data.username);
            console.log(errors);
        } catch (error) {

        }

    };

    console.log(watch("username"))
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
            <SearchResults username={username}/>
        </>


    )


}

export default Search;