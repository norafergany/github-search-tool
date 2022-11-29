import './App.css';
import Container from 'react-bootstrap/Container';
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";


function App() {
    return (
        <>
            <Container>
                <Navigation/>
                <Search/>
                <SearchResults/>
            </Container>
        </>

    );
}

export default App;
