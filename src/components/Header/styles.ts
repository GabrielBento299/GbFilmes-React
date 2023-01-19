import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem 7rem;
    background-color: #121212;

    .links {
        display: flex;
        align-items: center;
        gap: 2.5rem;

        a {
            display: flex;
            align-items: center;
            gap: .5rem;
            font-size: 2.5rem;
            text-decoration: none;
            color: #f7d354;


            transition: .4s ease;

            :hover {
                transform: scale(1.10);
            }
        }
    }

    form {
        display: flex;
        align-items: center;
        gap: .2rem;
        max-width: 400px;
        width: 100%;

        button {
            display: flex;
            align-items: center;
            background-color: #E50914;
            border: 2px solid #E50914;
            border-radius: 7px;
            color: #000;
            height: 40px;
            padding: .5rem;
            font-size: 1.3rem;

            cursor: pointer;
            transition: all 0.4s ease;

            &:hover {
                background-color: transparent;
                color: #F7D354;
             }
         }
    }

`;
