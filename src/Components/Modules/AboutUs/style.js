import styled from 'styled-components';

export const WrapperAbout = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('./rootImage.jpg');
    background-size: cover;
    background-repeat: no-repeat;
`
export const Wrapper = styled.div`
    height: 70%;
    width: 45%;
    @media only screen and (max-width: 430px) {
        width: 90%;
    }
`
export const AboutTitle = styled.h1`
    height: 80px;
    font-size: 2rem;
`
export const AboutText = styled.p`
    margin-top: 1%;
    margin-bottom: 1%;
    font-weight: 700;
    font-size: 1rem;
`