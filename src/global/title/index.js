import styled from 'styled-components';

const Title = styled.p`
    font-size: 24px;
    font-weight: 900;
    font-family: "Montserrat", sans-serif;
    
    margin-top: 0em;
    margin-bottom: 0em;
    
    color: ${({ theme }) => theme.title.color};
`

export default Title