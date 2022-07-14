import styled from 'styled-components';

export const MenuComponent = styled.div`
    display: flex;
    flex-direction: column;
 
    width: 300px;
    height: calc(100% - 20px);
    
    padding: 20px 20px 0px 20px;
    
    border-right: solid 1px ${({ theme }) => theme.menu.border};
`