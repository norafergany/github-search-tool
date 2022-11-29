import {Navbar} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {ReactComponent as DarkMode} from '../assets/icon-moon.svg';


const Navigation = () => {


    return (
        <header>
            <Navbar expand="lg" className="my-3">
                <Container fluid>
                    <Navbar.Brand href=".">
                        <span className="devfinder-brand">devfinder</span>
                    </Navbar.Brand>

                    <span className="navbar-text">
                        <button className="dark-mode-button ">
                            <span className="ms-auto me-3">LIGHT</span>
                            <DarkMode/>
                        </button>
                    </span>


                </Container>

            </Navbar>
        </header>)
}

export default Navigation;