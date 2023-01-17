import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 4rem;

`;

export const MoviesContainer = styled.div`
     display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-gap: 2.5rem;
        justify-content: center;
        justify-items: center;
        padding: 1rem;
 `;
