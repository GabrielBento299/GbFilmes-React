import styled from 'styled-components';

interface Teste {
  toogle: boolean;
}

export const Container = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2.5rem 7rem;
        background-color: #121212;

        @media screen and (max-width: 900px) {
            flex-direction: column;
            gap: 2rem;
        }

        .links {
            display: flex;
            align-items: center;
            gap: 2.5rem;

            @media screen and (max-width: 900px) {
                flex-direction: column;
                gap: 1.5rem;
            }

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

        @media screen and (max-width: 900px) {
            width: 350px;
        }


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

// export const ContainerMobile = styled.div<Teste>`

//             position: absolute;
//             width: 100%;
//             height: 100%;
//             top: 0;
//             bottom: 0;
//             left: 0;
//             right: 0;
//             z-index: 5;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             backdrop-filter: blur(3px);
//             background: rgba(17, 18, 17, 0.95);
// eslint-disable-next-line max-len
//             background: linear-gradient(34deg, rgba(25, 88, 24, 0.95) 0%, rgba(17, 18, 17, 0.95) 95%);
//             display: none;

//             .close-icon {
//                 svg {
//                     position: absolute;
//                     top: 1rem;
//                     right: 1rem;
//                 }
//             }

//             a {
//                 color: red;
//             }

//             .nav {
//                 display: flex;
//                 align-items: center;
//                 justify-content: center;
//                 flex-direction: column;
//                 gap: 2rem;
//             }
// `;
