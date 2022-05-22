import styled from 'styled-components';

const AvatarContainer = styled.div`
    display: flex;
    
    flex: 1;
    
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
`

const AvatarImage = styled.img`
    width: 130px;
    height: 130px;
    
    border-radius: 50%;
    
    animation: ${props => props.animation } 0.5s linear 1 forwards;
`

const AvatarTitle = styled.span`
    font-size: 24px;
    font-weight: 900;
    font-family: "Montserrat", sans-serif;
    
    color: ${({ theme }) => theme.title.color};
`

export {
    AvatarContainer,
    AvatarImage,
    AvatarTitle
}