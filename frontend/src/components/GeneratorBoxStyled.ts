import styled, { css, createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`body {
    margin: 0;
    font-family: sans-serif;
    color: #333;
    background: #eee;
};`

export const Button = styled.button`
    ${props =>
        props.disabled ?
            css`
            background: grey;
            border: 1px solid grey;
            `: css`
            background: green;
            cursor: pointer;
            border: 1px solid green;
            `};
    display: inline-block;
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.5em 1.5em;
    border-radius: 3px;
    display: block;

    :focus {
        outline:none;
    }
`;

export const Container = styled.div`
    max-width: 80vw;
    margin: 0  auto;
`;

export const Label = styled.span`
    margin: 1em;
`

export const Section = styled.section`
    margin: 1em;
`;

export const Text = styled.p`
    color: black;
`;
