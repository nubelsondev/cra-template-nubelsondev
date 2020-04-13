import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        outline: 0;
    }

    html{
        font-size: 62.5%;
    }

    body{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.7;
        --primary: ${(props) => props.theme.colors.primary};
        --text: ${(props) => props.theme.colors.text};
        --text-highlight: ${(props) => props.theme.colors.text_highlight};
        --background: ${(props) => props.theme.colors.background};
        --white: #fff;
        background-color: var(--background);
        color: var(--text)
    }
`
