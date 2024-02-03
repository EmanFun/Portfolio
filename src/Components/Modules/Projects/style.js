import styled from 'styled-components';

export const WrapperProjects = styled.section`
    height: 100vh;
    width: 100%;
    font-weight: 600;
    background-image: url('./rootImage.jpg');
    background-size: cover;
`

export const Wrapper = styled.div`
    padding-top: 7rem;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media only screen and (max-width: 1024px) {
        width: 100%;
        div{
            margin: 5px;
            padding: 5px;
            flex-basis: 150px;
        }
    }
`

export const Card = styled.div`
    flex-grow: 1;
    flex-basis: 100px;
    margin: 15px;
    padding: 10px;
    border: solid 1px;
    box-shadow: 0 0 1px 1px black;
    border-color: #242424;
    border-radius: 2rem;
    height: 10%;
`

export const Title = styled.h3`
`

export const Text = styled.p`
`

export const Link = styled.a`

`