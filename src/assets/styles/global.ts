import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
    }

    body {
        background-color: #222;
        color: #fff;
    }

    a {
        text-decoration: none;
        color: #f7d354;
    }
`;
