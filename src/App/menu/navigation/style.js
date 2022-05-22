import styled from 'styled-components';

const NavigationContent = styled.div`
    display: flex;
    
    flex: 2;
    justify-content: center;
    align-items: center;
`

const NavigationComponent = styled.ul`
    padding: 0;
    margin-bottom: 0;
    
    list-style: none;
`

const NavigationItem = styled.li`
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 700;
    
    padding: 8px 0;
    
    color: ${({ theme }) => theme.title.color};
    
    &:hover {
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-color: rgba(144, 19, 254, 0.5);
        text-decoration-thickness: 8px;
    }
`

export {
    NavigationContent,
    NavigationComponent,
    NavigationItem
}