import styled from 'styled-components';

export const Container = styled.div`
    background-color: #333;
    border-radius: 7px;
    cursor: pointer;
    padding: .7rem;
    transition: padding 0.2s ease-in;

    &:hover {
        padding: 1rem;
    }

    img, span, h2{
        margin-bottom: 1rem;
    }

    .info {
        display: flex;
        flex-direction: column;
      }

    img {
         width: 100%;
         max-height: 70%;
         transition: filter 0.3s ease-in;

        &:hover {
            filter: brightness(1.07);
        }
    }

    h2 {
        font-size: 1rem;
        margin-bottom: 1.5rem;
        text-align: start;
        margin-top: 0rem;
        height: 35px;
    }

    a {
        background-color: #f7d354;
        border: 2px solid #f7d354;
        border-radius: 4px;
        color: #000;
        padding: 1rem 0.5rem;
        text-align: center;
        font-weight: bold;
    }

    svg {
        color: #f7d354;
    }
 `;
