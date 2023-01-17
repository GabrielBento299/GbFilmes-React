import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem 2rem;
    background-color: #121212;

    h2 {
        display: flex;
        align-items: center;
        gap: 50.5rem;
    }

    form {
        display: flex;
        align-items: center;
        gap: .2rem;

        input {
            padding: 0.7rem 0.8rem;
            border: none;
            outline: none;
            border-radius: 7px;
        }

        button {
            display: flex;
            align-items: center;
            background-color: #E50914;
            border: 2px solid #E50914;
            border-radius: 7px;
            color: #000;
            padding: .3rem;
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
