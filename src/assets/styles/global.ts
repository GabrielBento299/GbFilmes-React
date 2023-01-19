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

        &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #0a91d6;
        border-radius: 20px;
    }
`;
