import styled from 'styled-components';

export const MenuComponent = styled.div`
    display: flex;
    flex-direction: column;
 
    width: 300px;
    height: 100%;
    
    padding: 20px;
    
    border-right: solid 1px ${({ theme }) => theme.menu.border};
`