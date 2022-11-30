import './App.css';
import Container from 'react-bootstrap/Container';
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import {ErrorBoundary} from "react-error-boundary";


function App() {

    const errorFallback = () => {
        return (<div role="alert">
                <p>No results</p>
            </div>)
    }
    return (<>
            <Container className="base-container">

                <Navigation/>
                <ErrorBoundary FallbackComponent={errorFallback}>

                    <Search/>
                </ErrorBoundary>
            </Container>
        </>

    );
}

export default App;
