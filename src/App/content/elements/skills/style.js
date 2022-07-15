import styled from 'styled-components';

import { DEVICES } from '../../../../global/utils';

const SkillsContainer = styled.div`
    display: flex;
    height: 100%;
    
    justify-content: center;
    align-items: center;
`

const SkillsTable = styled.div`
    display: grid;
    
    grid-template-columns: repeat(5, min-content);
    grid-template-rows: repeat(5, min-content);
    grid-gap: 30px;
    
    @media screen and ${DEVICES.laptop} { 
        grid-gap: 10px;
        
        grid-template-columns: repeat(5, 150px);
    }
`
const SkillContainer = styled(SkillsContainer)``

export {
    SkillsContainer,
    SkillsTable,
    SkillContainer
}