import styled from 'styled-components';

export const SocialWrapper = styled.footer`
    position: fixed;
    bottom: 1rem;
    width: 100vw;
    display: flex;
    justify-content: center;
    margin: 0;
    background: transparent;
`

export const Wrapper = styled.div`
    display: flex;
    gap: 3rem;
    @media only screen and (max-width: 690px) {
        gap: 0;
    }
    `

export const Link = styled.div`
    padding: 1rem;
    transition: transform 0.5s ease-in-out;
    &:hover{
        transform: scale(1.4);
        transition-delay: 0.2s;
    }
    @media only screen and (max-width: 390px) {
        padding: 5px;
    }
`