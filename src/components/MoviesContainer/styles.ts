import styled from 'styled-components';

export const Container = styled.div`
        max-width: 1400px;
        width: 100%;
        margin: 0 auto;
 `;

export const ContainerMovie = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-gap: 2.5rem;
        justify-content: center;
        justify-items: center;
        padding: 1rem;
`;

export const Title = styled.h1`
        font-size: 2rem;
        margin: 1.2rem;
        color: red;
`;
