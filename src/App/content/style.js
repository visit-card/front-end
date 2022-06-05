import styled from 'styled-components';

export const ContentComponent = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.background};
    
    overflow-y: scroll;
`