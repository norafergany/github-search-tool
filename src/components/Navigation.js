import {Navbar} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ToggleTheme from "./ToggleTheme";


const Navigation = (props) => {

    const {theme, handleClick} = props;


    return (
        <header>
            <Navbar expand="lg" className="my-3">
                <Container fluid>
                    <Navbar.Brand href=".">
                        <span
                            className={`h1 devfinder-brand ${theme === 'light' ? "link-dark" : "link-light"}`}>devfinder</span>
                    </Navbar.Brand>
                    <ToggleTheme theme={theme} toggleTheme={handleClick}/>

                </Container>

            </Navbar>
        </header>)
}

export default Navigation;