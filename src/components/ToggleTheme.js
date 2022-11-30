import React from "react";
import styled from "styled-components"
import {ReactComponent as DarkMode} from "../assets/icon-moon.svg";
import Button from "react-bootstrap/Button";
import {ReactComponent as LightMode} from "../assets/icon-sun.svg";

const StyledButton = styled.button`
  background: ${({theme}) => theme.background};
  color: ${({theme}) => theme.text};
  border: none;
  cursor: pointer;
  font-size: 1rem;

`;


export const ToggleTheme = (props) => {

    const {theme, toggleTheme} = props;


    const modeIcon = theme === 'light' ? <DarkMode/> : <LightMode/>;
    const modeText = theme === 'light' ? "DARK" : "LIGHT";

    return (
        <span className="navbar-text">
            <StyledButton className="theme-button" onClick={toggleTheme}>
                                    {modeText}
                <span className="ms-auto me-3"> {modeIcon}</span>

            </StyledButton>
        </span>
    )
}

export default ToggleTheme;