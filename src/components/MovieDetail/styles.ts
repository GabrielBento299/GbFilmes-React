import styled from 'styled-components';

export const Container = styled.div`
     display: flex;
     gap: 2.5rem;


     @media( max-width: 768px) {
        flex-direction: column;
    };

     img {
        max-height: 100%;

        @media(max-width: 768px) {
            height: 50%;
            width: 100%;
        }
    }

    > div {
        display: grid;
    }

    .info {
            margin-bottom: 1rem;

            h3 {
                color: #B3B3B3;
                font-size: 1.4rem;
                text-transform: uppercase;
            }

            strong {
                ::after {
                    content: ', ';
                }

                :last-child {
                    ::after {
                        content: '';
                    }
                }
            }
    }
`;
