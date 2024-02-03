import styled from 'styled-components';


export const SkillWrapper = styled.section`
    height: 81.7vh;
    padding-top: 10rem;
    background-image: url('./projectImage.jpg');
    background-size: cover;
    color: #090100;

`
export const Wrapper = styled.div`
    margin: 2rem;
    display: flex;
    flex-wrap: wrap;
    font-weight: bolder; 
    @media only screen and (max-width: 430px) {
        margin: 5px;
        gap: 1px;
        image{
            padding: 0;
            margin: 0;
            width: 30px;
            height: 30px;
        }
        div{
            
        }
        p{
            display: none;
        }
    }
`
export const Card = styled.div`
    flex-grow: 1;
    flex-basis: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: 430px) {

        flex-basis: 65px;
        min-width: 65px;
        
    p{
        font-size: small;
    }
}
`
export const Title = styled.h1`
    margin: 0;
`
export const SubTitle = styled.h2`
    margin: 0;
    padding: 0;
`
export const TechName = styled.p`
    text-transform: capitalize;
`