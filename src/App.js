import './App.css';
import Container from 'react-bootstrap/Container';
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import {ThemeProvider} from "styled-components";
import {useEffect, useState} from "react";
import {dark, light} from "./themes/Themes";
import {GlobalStyles} from "./themes/GlobalStyles";


function App() {

    const [theme, setTheme] = useState('light');

    const toggleTheme = (theme) => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    }

    useEffect(() => {
        function getInitialTheme() {
            const storedTheme = localStorage.getItem('theme') === 'dark' || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            return storedTheme;
        }
        const initialTheme = getInitialTheme();
        setTheme(initialTheme);

    }, [])

    return (<>
            <ThemeProvider theme={theme === 'light' ? light : dark} handleClick={toggleTheme}>
                <GlobalStyles/>
                <Container className="base-container">
                    <Navigation theme={theme} handleClick={() => toggleTheme(theme)}/>
                    <Search/>
                </Container>
            </ThemeProvider>
        </>

    );
}

export default App;
