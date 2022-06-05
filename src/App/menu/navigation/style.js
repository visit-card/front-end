import styled, { css } from 'styled-components';

const NavigationContainer = styled.div`
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
    
    transition: 1s;
    transform-origin: 0% 100%;
    
    padding: 8px 0;
    
    cursor: pointer;
    
    color: ${({ theme }) => theme.title.color};
    
    text-decoration-style: solid;
    text-decoration-color: rgba(144, 19, 254, 0.5);
    text-decoration-thickness: 8px;
                
    &:hover {
        transform: scale(1.2);
    }
       
    ${(props) => {
        if (props.isActive) {
            return css`
                text-decoration-line: underline;
            `;
        } else {
            return css`
                text-decoration-line: none;
            `;
        }
    }}
`

export {
    NavigationContainer,
    NavigationComponent,
    NavigationItem
}